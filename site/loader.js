(function() {
  const LOCALE_KEY_NAME = 'jinge-material-site.locale';
  const THEME_KEY_NAME = 'jinge-material-site.theme';
  const THEME_LINK_ID = 'jinge-material-site-theme-link';
  const SUPPORT_THEMES = ['default', 'default-dark', 'purple', 'purple-dark'];

  const env = window.__env__ = {
    /* 请勿修改下面这行代码。该代码用于工程化脚本替换为实际的环境变量。 */
    /* AUTO_GENERATED_ENVIROMENTS */
    localeKey: LOCALE_KEY_NAME,
    themeKey: THEME_KEY_NAME,
    themeId: THEME_LINK_ID
  };

  /** loader utils **/
  function loadStyle(href, id) {
    return new Promise((resolve, reject) => {
      const $s = document.createElement('link');
      $s.rel = 'stylesheet';
      $s.onload = resolve;
      $s.onerror = reject;
      if (!href.startsWith('https://')) {
        href = env.meta.public + href;
      }
      $s.href = href;
      id && ($s.id = id);
      document.head.appendChild($s);
    });
  }
  function loadScript(src) {
    return new Promise(resolve => {
      const $s = document.createElement('script');
      $s.src = env.meta.public + src;
      $s.async = false; // force execute sequence
      $s.onload = resolve;
      // $s.onerror = reject; // won't work any more.
      document.body.appendChild($s);
    });
  }
  function getLocale() {
    const pn = location.pathname;
    const pi = pn.indexOf('/', env.meta.public.length);
    let locale = pi > 0 ? pn.substring(env.meta.public.length, pi) : null;
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
    history.replaceState(null, null, `${env.meta.public}${locale}/`);
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
  if (location.search.startsWith('?__git_pages_redirect=')) {
    const redirectPath = decodeURIComponent(location.search.substring(22));
    history.replaceState(null, null, redirectPath);
  }

  const locale = getLocale();
  Promise.all([
    locale === 'en' ? loadStyle('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700|Roboto:300,400,500,700') : Promise.resolve(),
    loadStyle(env.meta.theme[getTheme()], THEME_LINK_ID),
    loadStyle(env.meta.style.entry),
    // 多语言字典包必须在 main 之前加载
    loadScript(env.meta.locale[locale].entry),
    loadScript(env.meta.script.entry)
  ]).then(() => {
    if (!window.JINGE_I18N_DATA) {
      alert('load failed due to i18n data not loaded.\nplease check console.');
    }
  }, err => {
    alert(`load failed with message: ${err.message || 'none'}!\nplease check console.`);
  });
})();
