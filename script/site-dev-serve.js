const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');
const { __r, generateLoader } = require('./_util');
const getWebpackBuildMainConfig = require('./_webpack_site');
const getWebpackBuildThemeConfig = require('./_webpack_theme');

const webpackConfigs = [
  getWebpackBuildThemeConfig(path.resolve(__dirname, '../site/app/themes')),
  getWebpackBuildMainConfig(),
];

webpackConfigs.forEach((cfg) => {
  // cfg.cache = {
  //   type: 'filesystem',
  //   cacheDirectory: path.resolve(__dirname, '../.tmp/.cache'),
  // };
  cfg.stats = {
    colors: true,
    children: !('NO_LOG' in process.env),
  };
});

const compiler = Webpack(webpackConfigs);

const server = new WebpackDevServer(
  {
    port: 9000,
    host: '0.0.0.0',
    historyApiFallback: true,
    static: path.resolve(__dirname, '../site'),
    onBeforeSetupMiddleware: function (devServer) {
      devServer.app.get('/loader.js', function (req, res) {
        const mfs = compiler.compilers[0].outputFileSystem;
        generateLoader(mfs);
        res.send(mfs.readFileSync(__r('docs/loader.js'), 'utf-8'));
      });
    },
  },
  compiler,
);

server.start();
