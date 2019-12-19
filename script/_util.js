const htmlMinify = require('html-minifier').minify;

function getBaseHref() {
  let href = process.env.BASE_HREF || '/';
  if (!href.endsWith('/')) {
    href += '/';
  }
  if (!href.startsWith('/')) {
    href = '/' + href;
  }
  return href;
}

function getPage404Content(baseHref, isProdMode, noCompress) {
  const cnt = `
<!doctype html>
<html>
<head>
<script>
location.replace(\`${baseHref}?__git_pages_redirect=\${encodeURIComponent(location.pathname)}\`);
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

module.exports = {
  getBaseHref,
  getPage404Content
};
