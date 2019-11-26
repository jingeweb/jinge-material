const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');
const getWebpackConfig = require('./_webpack');
const buildThemes = require('./_theme');

const webpackConfig = getWebpackConfig();
webpackConfig.cache = {
  type: 'filesystem'
};
const compiler = Webpack(webpackConfig);

let hasBuiltThemes = false;
compiler.hooks.emit.tapPromise('JINGE_MATERIAL_SITE_THEME', async compilation => {
  // build themes and only build once.
  if (hasBuiltThemes) return;
  hasBuiltThemes = true;
  const themes = await buildThemes();
  themes.forEach(theme => {
    compilation.assets[`theme.${theme.name}.css`] = {
      source: () => theme.css,
      size: () => theme.css.length
    };
  });
});

const server = new WebpackDevServer(compiler, {
  publicPath: '/',
  stats: {
    colors: true
  },
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, '../site')
});

server.listen(9000, '0.0.0.0');
