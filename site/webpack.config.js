/* eslint-env node */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const prod = 'PRODUCTION' in process.env;
const { jingeLoader, JingeWebpackPlugin } = require('jinge/compiler');
const { uiRouterAlias } = require('jinge-ui-router/compiler');
function __r(p) {
  return path.join(__dirname, p);
}
const DIST_DIR = prod ? path.resolve(__dirname, '../docs/') : __r('dist/');
const BUILD_LOCALE = process.env.BUILD_LOCALE || 'zh_cn';
const I18N_OPTIONS = {
  mode: 'compiler-translate',
  translateDir: __r('translate'),
  buildLocale: BUILD_LOCALE,
  defaultLocale: 'zh_cn',
  generateCSV: 'GENERATE_I18N_CSV' in process.env
};

module.exports = {
  watch: 'WATCH' in process.env,
  mode: prod ? 'production' : 'development',
  target: 'web',
  entry: __r('app/index.js'),
  output: {
    filename: `js/jinge-material.${BUILD_LOCALE}.${prod ? 'min.' : ''}js`,
    path: DIST_DIR
  },
  devtool: 'source-map',
  plugins: [
    new CopyPlugin([  {
      from: __r('asset/'),
      to: DIST_DIR
    }, {
      from: __r('index.html'),
      to: DIST_DIR,
      transform: prod ? content => {
        return content
          .toString()
          .replace('mode: \'development\',', 'mode: \'production\'');
      } : undefined
    }]),
    new JingeWebpackPlugin({
      extract: {
        styleFile: `css/jinge-material${prod ? '.min' : ''}.css`
      },
      i18n: I18N_OPTIONS
    })
  ],
  module: {
    rules: [{
      test: /\.(js|html)$/,
      use: {
        loader: jingeLoader,
        options: {
          componentAlias: uiRouterAlias,
          i18n: I18N_OPTIONS
        }
      }
    }, {
      test: /\.scss$/,
      use: [ jingeLoader, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
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
