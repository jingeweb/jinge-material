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
  return path.resolve(__dirname, `../site/${p}`);
}

function getGitHash() {
  const output = require('child_process').execSync('git log -n 1');
  const m = output.toString().match(/commit\s+([a-f0-9]+)/);
  return m[1].substring(0, 10);
}

module.exports = function getWebpackConfig(isProdMode = false, noCompress = false) {
  const gitHash = isProdMode ? getGitHash() : '';
  const plugins = [new JingeWebpackPlugin({
    compress: isProdMode && !noCompress,
    style: {
      extract: true,
      filename: `jinge-material-site${isProdMode ? `.${gitHash}.min` : ''}.css`
    },
    i18n: {
      translateDir: __r('translate'),
      defaultLocale: 'zh_cn',
      filename: `locale.[locale]${isProdMode ? `.${gitHash}.min` : ''}.js`
    }
  })];
  isProdMode && plugins.push([new CopyPlugin([{
    from: __r('assets'),
    to: path.resolve(__dirname, '../docs/assets')
  }, {
    from: __r('index.html'),
    to: path.resolve(__dirname, '../docs'),
    transform: content => {
      return content.toString().replace(
        'src="loader.js"',
        `src="loader.${gitHash}.min.js"`
      );
    }
  }, {
    from: __r('loader.js'),
    to: path.resolve(__dirname, `../docs/loader.${gitHash}.min.js`),
    transform: content => {
      return noCompress ? content : require('terser').minify(content.toString()).code;
    }
  }])]);
  const opts = {
    mode: !isProdMode || noCompress ? 'development' : 'production',
    target: 'web',
    entry: __r('app/entry/index.js'),
    output: {
      filename: `jinge-material-site.${isProdMode ? `${gitHash}.min.` : ''}js`,
      path: path.resolve(__dirname, '../docs')
    },
    devtool: !isProdMode ? 'source-map' : false,
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
            sourceMap: false,
            sassOptions: {
              includePaths: [path.resolve(__dirname, '../')]
            }
          }
        }]
      }]
    }
  };
  return opts;
};
