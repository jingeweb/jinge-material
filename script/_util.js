const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const terser = require('terser');
const htmlMinify = require('html-minifier').minify;

const BASE_HREF = (function() {
  let href = process.env.BASE_HREF || '/';
  if (!href.endsWith('/')) {
    href += '/';
  }
  if (!href.startsWith('/')) {
    href = '/' + href;
  }
  return href;
})();

function getPage404Content(isProdMode, noCompress) {
  const cnt = `
<!doctype html>
<html>
<head>
<script>
location.replace(\`${BASE_HREF}?__git_pages_redirect=\${encodeURIComponent(location.pathname)}\`);
</script>
</head>
<body></body>
</html>`;
  if (isProdMode && !noCompress) {
    return htmlMinify(cnt, {
      collapseWhitespace: true,
      minifyCSS: true,
      removeAttributeQuotes: true
    });
  } else {
    return cnt;
  }
}

function __r(p) {
  return path.resolve(__dirname, `../${p}`);
}

function rmCommon(cks) {
  Object.keys(cks).forEach(cn => {
    if (cn.indexOf('~') >= 0) delete cks[cn];
  });
}

function generateLoader(outputFs = fs, compress = false) {
  if (typeof outputFs === 'boolean') {
    compress = outputFs;
    outputFs = fs;
  }
  const chunkInfoFile = __r('docs/chunk.json');
  try {
    outputFs.statSync(chunkInfoFile);
  } catch (ex) {
    return;
  }
  const meta = JSON.parse(outputFs.readFileSync(chunkInfoFile, 'utf-8'));
  delete meta.script.chunks; // webpack 内部知道 js chunks 的信息
  meta.theme = {};
  rmCommon(meta.style.chunks);
  rmCommon(meta.locale.zh_cn.chunks);
  rmCommon(meta.locale.en.chunks);

  outputFs.readdirSync(__r('docs/themes')).forEach(f => {
    if (!f.endsWith('.css')) return;
    meta.theme[f.split('.')[0]] = `themes/${f}`;
  });
  let cnt = fs.readFileSync(__r('site/loader.js'), 'utf-8').replace(
    '/* AUTO_GENERATED_ENVIROMENTS */', `
    production: false,
    meta: ${JSON.stringify(meta, null, 2).replace(/"(\w+)":/g, (m0, m1) => m1 + ':').replace(/\n/g, '\n    ').replace(/"/g, '\'')},`
  );
  if (compress) {
    const result = terser.minify(cnt);
    if (result.error) throw result.error;
    cnt = result.code;
  }
  const outfile = `loader${compress ? '.' + crypto.createHash('sha256').update(cnt).digest('hex').substr(0, 20) : ''}.js`;
  outputFs.writeFileSync(__r(`docs/${outfile}`), cnt);
  outputFs.unlinkSync(chunkInfoFile);
  return outfile;
}

function generateIndex(loaderFile) {
  let cnt = fs.readFileSync(__r('site/index.html'), 'utf-8');
  cnt = cnt.replace('<base href="/"/>', `<base href="${BASE_HREF}"/>`);
  cnt = cnt.replace('<script src="loader.js"></script>', `<script src="${loaderFile}"></script>`);
  cnt = htmlMinify(cnt, {
    collapseWhitespace: true,
    minifyCSS: true,
    removeAttributeQuotes: true
  });
  fs.writeFileSync(__r('docs/index.html'), cnt);
}

module.exports = {
  __r,
  BASE_HREF,
  generateLoader,
  generateIndex,
  getPage404Content
};
