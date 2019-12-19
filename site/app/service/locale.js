import {
  i18n
} from 'jinge';
import zhCN from '../../../locales/zh_cn';
import en from '../../../locales/en';
import {
  setLocale
} from '../../../src/_config';
import {
  getEnv
} from './env';
import {
  router
} from './router';

const env = getEnv();
const locales = {
  zh_cn: zhCN,
  en
};

let fontCheckLocale = null;
function loadFontIfNeed(locale) {
  if (fontCheckLocale === false) {
    return;
  }
  if (locale === 'en') {
    if (fontCheckLocale) {
      const $s = document.createElement('link');
      $s.rel = 'stylesheet';
      $s.href = 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700|Roboto:300,400,500,700';
      document.head.appendChild($s);
    }
    fontCheckLocale = false;
  } else {
    fontCheckLocale = locale;
  }
}

export function setCurrentLocale(locale) {
  /**
   * 首次从非英文切换到英文时，加载 Roboto 字体。
   */
  loadFontIfNeed(locale);
  /**
   * 切换组件库语言资源
   */
  setLocale(locales[locale]);
  if (locale === i18n.locale) {
    return;
  }
  /**
   * 在调用 i18n.switch 之前，先更新 router.baseHref.
   * 顺序不能颠倒，因为在 i18n 的 locale-change 事件发出后，
   * ui-sref 会更新链接，更新链接会依赖 router 的 baseHref。
   */
  const oldBaseHrefRegExp = new RegExp('^' + `${env.baseHref}${i18n.locale}/`);
  const newBaseHref = `${env.baseHref}${locale}/`;
  router.baseHref = newBaseHref;
  i18n.switch(
    locale,
    env.localeTpl.replace('[locale]', locale)
  );
  history.pushState(null, null, location.pathname.replace(oldBaseHrefRegExp, newBaseHref));
  localStorage.setItem(env.localeKey, locale);
  env.locale = locale;
}
