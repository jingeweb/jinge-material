(function() {
  const LOCALE_KEY_NAME = 'jinge-material-site.locale';
  const THEME_KEY_NAME = 'jinge-material-site.theme';
  const THEME_LINK_ID = 'jinge-material-site-theme-link';
  const SUPPORT_THEMES = ['default', 'default-dark', 'purple', 'purple-dark'];
  const loaderSrc = document.body.querySelector('script').src;
  const buildHash = loaderSrc.match(/([^.]+)\.min.js$/);

  let env = window.__AppEnv;
  if (!env) {
    env = window.__AppEnv = {};
  }
  Object.assign(env, {
    production: !!buildHash,
    localeKey: LOCALE_KEY_NAME,
    localeTpl: `locale.[locale]${buildHash ? `.${buildHash[1]}.min` : ''}.js`,
    themeKey: THEME_KEY_NAME,
    themeId: THEME_LINK_ID,
    themeTpl: `theme.[theme]${buildHash ? `.${buildHash[1]}.min` : ''}.css`
  });

  /** loader utils **/
  function loadStyle(href, id) {
    return new Promise((resolve, reject) => {
      const $s = document.createElement('link');
      $s.rel = 'stylesheet';
      $s.onload = resolve;
      $s.onerror = reject;
      $s.href = href;
      id && ($s.id = id);
      document.head.appendChild($s);
    });
  }
  function loadScript(src) {
    return new Promise(resolve => {
      const $s = document.createElement('script');
      $s.src = src;
      $s.async = false; // force execute sequence
      $s.onload = resolve;
      // $s.onerror = reject; // won't work any more.
      document.body.appendChild($s);
    });
  }
  function getLocale() {
    const pn = location.pathname;
    const pi = pn.indexOf('/', 1);
    let locale = pi > 0 ? pn.substring(1, pi) : null;
    if (locale === 'zh_cn' || locale === 'en') {
      localStorage.setItem(LOCALE_KEY_NAME, locale);
      env.locale = locale;
      return locale;
    }
    locale = localStorage.getItem(LOCALE_KEY_NAME) ||
      navigator.language.toLowerCase().replace(/-/g, '_');
    if (locale.startsWith('zh_')) {
      locale = 'zh_cn';
    } else if (locale !== 'en') {
      locale = 'en';
    }
    history.replaceState(null, null, `/${locale}/`);
    localStorage.setItem(LOCALE_KEY_NAME, locale);
    env.locale = locale;
    return locale;
  }
  function getTheme() {
    let theme = localStorage.getItem(THEME_KEY_NAME);
    if (!theme || SUPPORT_THEMES.indexOf(theme) < 0) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = SUPPORT_THEMES[1];
      } else {
        theme = SUPPORT_THEMES[0];
      }
    }
    localStorage.setItem(THEME_KEY_NAME, theme);
    env.theme = theme;
    return theme;
  }

  /** run application **/
  const locale = getLocale();
  Promise.all([
    locale === 'en' ? loadStyle('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700|Roboto:300,400,500,700') : Promise.resolve(),
    loadStyle(`jinge-material-site${buildHash ? `.${buildHash[1]}.min` : ''}.css`),
    loadStyle(`theme.${getTheme()}${buildHash ? `.${buildHash[1]}.min` : ''}.css`, THEME_LINK_ID),
    loadScript(`locale.${locale}${buildHash ? `.${buildHash[1]}.min` : ''}.js`),
    loadScript(`jinge-material-site${buildHash ? `.${buildHash[1]}.min` : ''}.js`)
  ]).then(() => {
    if (!window.JINGE_I18N_DATA) {
      alert('load failed due to i18n data not loaded.\nplease check console.');
    }
  }, err => {
    alert(`load failed with message: ${err.message || 'none'}!\nplease check console.`);
  });
})();
