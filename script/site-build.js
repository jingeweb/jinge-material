const path = require('path');
const Webpack = require('webpack');
const getWebpackBuildMainConfig = require('./_webpack_main');
const getWebpackBuildThemeConfig = require('./_webpack_theme');
const {
  getBaseHref,
  getPage404Content
} = require('./_util');

const noCompress = 'NO_COMPRESS' in process.env;
const baseHref = getBaseHref();
const page404 = getPage404Content(baseHref, true, noCompress);
const webpackConfigs = [
  getWebpackBuildThemeConfig(
    path.resolve(__dirname, '../site/app/themes'),
    true,
    noCompress
  ),
  getWebpackBuildMainConfig(
    baseHref,
    true,
    noCompress
  )
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
  } else {
    console.log(stats.toString());
  }
});
