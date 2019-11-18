/* eslint-env node */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {
  jingeLoader,
  JingeWebpackPlugin
} = require('jinge/compiler');
const {
  uiRouterAlias
} = require('jinge-ui-router/compiler');
const {
  jingeMaterialAlias,
  jingeMaterialFieldBase
} = require('../compiler');

const jingeMaterialSrcAlias = (function() {
  /**
   * 由于 site 里的代码也属于 jinge-material 仓库，
   * 所以需要修改下别名对应的 import 路径，改成具体的文件路径。
   */
  const alias = {};
  Object.keys(jingeMaterialAlias).forEach(libPath => {
    alias[
      libPath.replace('jinge-material', path.resolve(__dirname, '..'))
    ] = jingeMaterialAlias[libPath];
  });
  return alias;
})();

function __r(p) {
  return path.join(__dirname, p);
}
const PRODUCTION = 'PRODUCTION' in process.env;
const NO_COMPRESS = !PRODUCTION || ('NO_COMPRESS' in process.env);
const DIST_DIR = PRODUCTION ? path.resolve(__dirname, '../docs/') : __r('dist/');

const GIT_HASH = PRODUCTION ? (function() {
  const output = require('child_process').execSync('git log -n 1');
  const m = output.toString().match(/commit\s+([a-f0-9]+)/);
  return m[1].substring(0, 10);
})() : null;

const plugins = PRODUCTION ? [new CopyPlugin([{
  from: __r('assets'),
  to: path.join(DIST_DIR, 'assets')
}, {
  from: __r('index.html'),
  to: DIST_DIR,
  transform: content => {
    return content.toString().replace(
      'src="loader.js"',
      `src="js/loader.${GIT_HASH}.min.js"`
    );
  }
}, {
  from: __r('loader.js'),
  to: path.join(DIST_DIR, `js/loader.${GIT_HASH}.min.js`),
  transform: content => {
    return NO_COMPRESS ? content : require('terser').minify(content.toString()).code;
  }
}])] : [];

plugins.push(new JingeWebpackPlugin({
  compress: !NO_COMPRESS,
  style: {
    extract: true,
    filename: `css/jinge-material-site.default${PRODUCTION ? `.${GIT_HASH}.min` : ''}.css`
  },
  i18n: {
    translateDir: __r('translate'),
    defaultLocale: 'zh_cn',
    filename: 'locales/[locale].js'
  }
}));

module.exports = {
  mode: NO_COMPRESS ? 'development' : 'production',
  target: 'web',
  entry: __r('app/entry/index.js'),
  output: {
    filename: `js/jinge-material-site.${PRODUCTION ? `${GIT_HASH}.min.` : ''}js`,
    path: DIST_DIR,
    publicPath: 'dist'
  },
  devtool: NO_COMPRESS ? 'source-map' : false,
  resolve: {
    extensions: ['.js', '.scss', '.html']
  },
  plugins,
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
            componentAlias: [
              uiRouterAlias, jingeMaterialSrcAlias
            ],
            componentBase: jingeMaterialFieldBase
          }
        }
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: jingeLoader
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: !NO_COMPRESS,
          sassOptions: {
            includePaths: [path.resolve(__dirname, '../')]
          }
        }
      }]
    }]
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    contentBase: __dirname,
    port: 9000
  }
};
