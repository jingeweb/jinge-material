/* eslint-env node */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { jingeLoader, JingeWebpackPlugin } = require('jinge/compiler');
const { uiRouterAlias } = require('jinge-ui-router/compiler');
const jingeMaterialAlias = (function() {
  /**
   * 由于 site 里的代码也属于 jinge-material 仓库，
   * 所以需要修改下别名对应的 import 路径，改成具体的文件路径。
   */
  const { jingeMaterialAlias } = require('../compiler');
  const alias = {
    [path.resolve(__dirname, '../src/index.js')]: jingeMaterialAlias['jinge-material']
  };
  return alias; 
})();
function __r(p) {
  return path.join(__dirname, p);
}
const PRODUCTION = 'PRODUCTION' in process.env;
const NO_COMPRESS = !PRODUCTION || ('NO_COMPRESS' in process.env);
const SOURCEMAP = NO_COMPRESS || ('SOURCEMAP' in process.env);
const DIST_DIR = PRODUCTION ? path.resolve(__dirname, '../docs/') : __r('dist/');
const BUILD_LOCALE = process.env.BUILD_LOCALE || 'zh_cn';
const I18N_OPTIONS = {
  mode: 'compiler-translate',
  translateDir: __r('translate'),
  buildLocale: BUILD_LOCALE,
  defaultLocale: 'zh_cn',
  generateCSV: 'GENERATE_I18N_CSV' in process.env
};
const GIT_HASH = PRODUCTION ? (function() {
  const output = require('child_process').execSync('git log -n 1');
  const m = output.toString().match(/commit\s+([a-f0-9]+)/);
  return m[1].substring(0, 10);
})() : null;

module.exports = {
  watch: 'WATCH' in process.env,
  mode: NO_COMPRESS ? 'development' : 'production',
  target: 'web',
  entry: __r('app/entry/index.js'),
  output: {
    filename: `js/jinge-material.${BUILD_LOCALE}.${PRODUCTION ? `${GIT_HASH}.min.` : ''}js`,
    path: DIST_DIR
  },
  devtool: SOURCEMAP ? 'source-map' : false,
  resolve: {
    extensions: ['.js', '.scss', '.html']
  },
  plugins: [
    new CopyPlugin([  {
      from: __r('asset'),
      to: path.join(DIST_DIR, 'asset')
    }, {
      from: __r('index.html'),
      to: DIST_DIR,
      transform: PRODUCTION ? content => {
        return content.toString().replace(
          'src="loader.js"',
          `src="js/loader.${GIT_HASH}.min.js"`
        );
      } : undefined
    }, {
      from: __r('loader.js'),
      to: path.join(DIST_DIR, PRODUCTION ? `js/loader.${GIT_HASH}.min.js` : ''),
      transform: PRODUCTION ? content => {
        return NO_COMPRESS ? content : require('terser').minify(content.toString()).code;
      } : undefined
    }]),
    new JingeWebpackPlugin({
      extractStyle: {
        filename: `css/jinge-material.default${PRODUCTION ? `.${GIT_HASH}.min` : ''}.css`
      },
      compress: !NO_COMPRESS,
      i18n: I18N_OPTIONS
    })
  ],
  module: {
    rules: [{
      test: /\.(js|html)$/,
      oneOf: [{
        resourceQuery: /example/,
        use: path.resolve(__dirname, '../compiler/loader.js')
      }, {
        use: {
          loader: jingeLoader,
          options: {
            componentAlias: Object.assign({}, uiRouterAlias, jingeMaterialAlias),
            i18n: I18N_OPTIONS,
            extractStyle: true,
            compress: !NO_COMPRESS
          }
        }
      }]
    }, {
      test: /\.scss$/,
      use: [ {
        loader: jingeLoader,
        options: {
          extractStyle: true,
          compress: !NO_COMPRESS
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: SOURCEMAP,
          includePaths: [path.resolve(__dirname, '../')]
        }
      } ]
    } ]
  },
  devServer: {
    writeToDisk: true,
    contentBase: DIST_DIR,
    port: 9000
  }
};
