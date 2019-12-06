const path = require('path');
const Webpack = require('webpack');
const getWebpackBuildMainConfig = require('./_webpack_main');
const getWebpackBuildThemeConfig = require('./_webpack_theme');

const noCompress = 'NO_COMPRESS' in process.env;
const webpackConfigs = [
  getWebpackBuildThemeConfig(
    path.resolve(__dirname, '../site/app/themes'),
    true,
    noCompress
  ),
  getWebpackBuildMainConfig(
    true,
    noCompress
  )
];
const compiler = Webpack(webpackConfigs);

compiler.run((err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log(stats.toString());
  }
});
