const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');
const {
  __r,
  generateLoader
} = require('./_util');
const getWebpackBuildMainConfig = require('./_webpack_site');
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
  contentBase: path.resolve(__dirname, '../site'),
  before: function(app, server) {
    app.get('/loader.js', function(req, res) {
      const mfs = compiler.compilers[0].outputFileSystem;
      generateLoader(mfs);
      res.send(mfs.readFileSync(
        __r('docs/loader.js'), 'utf-8'
      ));
    });
  }
});

server.listen(9000, '0.0.0.0');
