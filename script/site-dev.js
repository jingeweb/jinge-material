const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');
const getWebpackBuildMainConfig = require('./_webpack_main');
const getWebpackBuildThemeConfig = require('./_webpack_theme');

const webpackConfigs = [
  getWebpackBuildThemeConfig(path.resolve(__dirname, '../site/app/themes')),
  getWebpackBuildMainConfig()
];

webpackConfigs.forEach(cfg => {
  cfg.cache = {
    type: 'filesystem'
  };
});
const compiler = Webpack(webpackConfigs);

const server = new WebpackDevServer(compiler, {
  publicPath: '/',
  stats: {
    colors: true,
    children: !('NO_LOG' in process.env)
  },
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, '../site')
});

server.listen(9000, '0.0.0.0');
