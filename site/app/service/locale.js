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
  /**
   * 设置 router 的 baseHref
   */
  const newBaseHref = `${env.meta.public}${locale}/`;
  router.baseHref = newBaseHref;

  if (locale === i18n.locale) {
    return;
  }
  /**
   * 切换语言
   */
  const oldBaseHrefRegExp = new RegExp('^' + `${env.meta.public}${i18n.locale}/`);
  i18n.switch(locale);
  history.pushState(null, null, location.pathname.replace(oldBaseHrefRegExp, newBaseHref));
  localStorage.setItem(env.localeKey, locale);
  env.locale = locale;
}
