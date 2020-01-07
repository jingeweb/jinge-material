const path = require('path');
const Webpack = require('webpack');
const execSync = require('child_process').execSync;
const getWebpackBuildMainConfig = require('./_webpack_site');
const getWebpackBuildThemeConfig = require('./_webpack_theme');
const {
  __r, generateLoader,
  generateIndex,
  getPage404Content
} = require('./_util');

execSync(`rm -rf ${__r('docs')}`);
execSync(`mkdir -p ${__r('docs/assets')}`);
execSync(`cp -r ${__r('site/assets')} ${__r('docs')}`);

const noCompress = 'NO_COMPRESS' in process.env;
const page404 = getPage404Content(true, noCompress);
const webpackConfigs = [
  getWebpackBuildThemeConfig(
    path.resolve(__dirname, '../site/app/themes'),
    true, noCompress
  ),
  getWebpackBuildMainConfig(true, noCompress)
];

class BuildGitPagesPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('BUILD_GIT_PAGES_PLUGIN', function(compilation) {
      compilation.assets['.nojekyll'] = {
        source() { return ''; },
        size() { return 0; }
      };
      compilation.assets['404.html'] = {
        source() { return page404; },
        size() { return page404.length; }
      };
    });
  }
}

webpackConfigs[1].plugins.push(new BuildGitPagesPlugin());
const compiler = Webpack(webpackConfigs);

compiler.run((err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  generateIndex(generateLoader(true));
  console.log(stats.toString({
    colors: false,
    hash: false,
    modules: false,
    chunks: false,
    entrypoints: false
  }));
});
