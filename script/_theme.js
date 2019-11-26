const fs = require('fs');
const path = require('path');
const sass = require('node-sass');
const CleanCSS = require('clean-css');

function render(file) {
  return new Promise((resolve, reject) => {
    sass.render({
      file
    }, function(err, result) {
      if (err) return reject(err);
      resolve(result.css);
    });
  });
}

async function build(mergedThemesMap, relDir, isProdMode) {
  const dir = path.resolve(__dirname, relDir);
  const files = await fs.promises.readdir(dir);
  const results = await Promise.all(files.filter(f => f.endsWith('.scss')).map(file => {
    return render(path.join(dir, file)).then(css => {
      return {
        name: file.substr(0, file.length - 5),
        css: isProdMode ? new CleanCSS().minify(css).styles : css
      };
    });
  }));
  results.forEach(theme => {
    const mergedTheme = mergedThemesMap.get(theme.name);
    if (mergedTheme) {
      mergedTheme.css += '\n' + theme.css;
    } else {
      mergedThemesMap.set(theme.name, theme);
    }
  });
}

module.exports = async function buildThemes(isProdMode = false) {
  const mergedThemesMap = new Map();
  await Promise.all([
    build(mergedThemesMap, '../style/themes', isProdMode),
    build(mergedThemesMap, '../site/app/themes', isProdMode)
  ]);
  return [...mergedThemesMap.values()];
};
