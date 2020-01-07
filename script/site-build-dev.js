const path = require('path');
const execSync = require('child_process').execSync;
const Webpack = require('webpack');
const getWebpackBuildMainConfig = require('./_webpack_site');
const getWebpackBuildThemeConfig = require('./_webpack_theme');

const {
  __r, generateLoader
} = require('./_util');

const webpackConfigs = [
  getWebpackBuildThemeConfig(path.resolve(__dirname, '../site/app/themes')),
  getWebpackBuildMainConfig()
];

webpackConfigs.forEach(cfg => {
  cfg.cache = {
    type: 'filesystem'
  };
});

execSync(`rm -rf ${__r('docs')}`);
execSync(`mkdir -p ${__r('docs/assets')}`);
execSync(`cp -r ${__r('site/assets')} ${__r('site/index.html')} ${__r('docs')}`);

// isProdMode && plugins.push(new CopyPlugin([{
//   from: __r('assets'),
//   to: path.resolve(__dirname, '../docs/assets')
// }, {
//   from: __r('index.html'),
//   to: path.resolve(__dirname, '../docs'),
//   transform: content => {
//     const output = content.toString().replace(
//       'src="loader.js"',
//       `src="loader.${gitHash}.min.js"`
//     ).replace(
//       '<base href="/"/>',
//       `<base href="${baseHref || '/'}"/>`
//     );
//     if (!isProdMode || noCompress) {
//       return output;
//     }
//     return htmlMinify(output, {
//       collapseWhitespace: true,
//       minifyCSS: true,
//       removeAttributeQuotes: true
//     });
//   }
// }, {
//   from: __r('loader.js'),
//   to: path.resolve(__dirname, `../docs/.min.js`),
//   transform: content => {
//     return noCompress ? content : require('terser').minify(content.toString()).code;
//   }
// }]));

const compiler = Webpack(webpackConfigs);
compiler.run((err, stats) => {
  if (err) {
    return console.log(err);
  }
  generateLoader();
  console.log(stats.toString({
    colors: true,
    hash: false,
    modules: false,
    chunks: false,
    entrypoints: false
  }));
});
