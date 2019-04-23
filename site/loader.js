(function() {
  const isProd = window.__App['mode'] === 'production';
  function loadLocale() {
    let locale =
      sessionStorage.getItem('JINGE_MATERIAL_LOCALE') ||
      navigator.language.toLowerCase().replace(/-/g, '_') ||
      'en';
    if (locale.startsWith('zh_')) {
      locale = 'zh_cn';
    } else if (locale !== 'en') {
      locale = 'en';
    }
    return fetch(`${isProd ? '' : 'dist/'}i18n/${locale}.json`)
      .then(res => res.json())
      .then(dictData => {
        window.JingeI18nData = dictData;
      });
  }
  function loadTheme() {
    return new Promise((resolve, reject) => {
      const theme = sessionStorage.getItem('JINGE_MATERIAL_THEME') || 'default';
      const $s = document.createElement('link');
      $s.rel = 'stylesheet';
      $s.onload = resolve;
      $s.onerror = reject;
      $s.src = `${isProd ? '' : 'dist/'}css/bundle${theme}${
        isProd ? '.min' : ''
      }.css`;
      document.head.appendChild($s);
    });
  }
  function loadScript() {
    return new Promise((resolve, reject) => {
      const $s = document.createElement('script');
      $s.src = `${isProd ? '' : 'dist/'}js/bundle${isProd ? '.min' : ''}.js`;
      $s.onload = resolve;
      $s.onerror = reject;
      document.head.appendChild($s);
    });
  }
  function bootstrap() {
    window.__App.bootstrap();
  }
  function run() {
    Promise.all([loadTheme(), loadLocale().then(loadScript)])
      .then(bootstrap)
      .catch(err => {
        console.error(err);
        alert(err.message);
      });
  }
  document.addEventListener('DOMContentLoaded', run);
})();
