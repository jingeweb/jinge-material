(function() {
  const SUPPORT_THEMES = ['default', 'default-dark'];
  const loaderSrc = document.body.querySelector('script').src;
  const buildHash = loaderSrc.match(/([^.]+)\.min.js$/);
  /** loader utils **/
  function loadTheme(theme) {
    return new Promise((resolve, reject) => {
      const $s = document.createElement('link');
      $s.rel = 'stylesheet';
      $s.onload = resolve;
      $s.onerror = reject;
      $s.href = `css/jinge-material.${theme}${buildHash ? `.${buildHash[1]}.min` : ''}.css`;
      document.head.appendChild($s);
    });
  }
  function loadScript(locale) {
    return new Promise((resolve, reject) => {
      const $s = document.createElement('script');
      $s.src = `js/jinge-material.${locale}${buildHash ? `.${buildHash[1]}.min` : ''}.js`;
      $s.onload = resolve;
      $s.onerror = reject;
      document.body.appendChild($s);
    });
  }
  function getLocale() {
    const locale =
      sessionStorage.getItem('JINGE_MATERIAL_LOCALE') ||
      navigator.language.toLowerCase().replace(/-/g, '_') ||
      'en';
    if (locale.startsWith('zh_')) {
      return 'zh_cn';
    } else if (locale !== 'en') {
      return 'en';
    }
    return locale;
  }
  function getTheme() {
    const theme = sessionStorage.getItem('JINGE_MATERIAL_THEME') || SUPPORT_THEMES[0];
    if (SUPPORT_THEMES.indexOf(theme) < 0) return SUPPORT_THEMES[0];
    return theme;
  }

  /** run application **/
  Promise.all([
    loadTheme(getTheme()),
    loadScript(getLocale())
  ]).catch(err => {
    console.error(err);
    alert(`load fail with message: ${err.message || 'none'}!\nplease check console.`);
  });
})();
