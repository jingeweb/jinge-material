const path = require('path');
const fs = require('fs-extra');
const Webpack = require('webpack');
const getWebpackBuildMainConfig = require('./_webpack_lib');
const getWebpackBuildThemeConfig = require('./_webpack_theme');
const { __r } = require('./_util');

const noCompress = 'NO_COMPRESS' in process.env;

const webpackConfigs = [
  getWebpackBuildThemeConfig(path.resolve(__dirname, '../site/app/themes'), true, noCompress),
  getWebpackBuildMainConfig(true, noCompress),
];

webpackConfigs[0].output.path = __r('dist/themes');
webpackConfigs[0].plugins[1].options.filename = `[name]${noCompress ? '' : '.min'}.css`;

const compiler = Webpack(webpackConfigs);

if (!noCompress) {
  const iconSrcDir = __r('icons');
  const iconDstDir = __r('dist/icons');
  fs.mkdirpSync(iconDstDir);
  fs.readdirSync(iconSrcDir).forEach((f) => {
    if (!f.endsWith('.js')) return;
    let cnt = fs.readFileSync(path.join(iconSrcDir, f), 'utf-8');
    cnt = cnt.replace(/import[^;]+;/, '').replace(/extends Icon/g, 'extends JingeMaterial.Icon');
    fs.writeFileSync(path.join(iconDstDir, f), cnt);
  });
}

compiler.run((err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(
    stats.toString({
      colors: false,
      hash: false,
      modules: false,
      chunks: false,
      entrypoints: false,
    }),
  );
});
