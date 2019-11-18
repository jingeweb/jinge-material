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

export function setCurrentLocale(locale) {
  setLocale(locales[locale]);
  if (locale === i18n.locale) {
    return;
  }
  /**
   * 在调用 i18n.switch 之前，先更新 router.baseHref.
   * 顺序不能颠倒，因为在 i18n 的 locale-change 事件发出后，
   * ui-sref 会更新链接，更新链接会依赖 router 的 baseHref。
   */
  router.baseHref = `/${locale}/`;
  i18n.switch(
    locale,
    (env.production ? '' : 'dist/') + 'locales/[locale].js'
  );
  history.replaceState(null, null, location.pathname.replace(/^\/\w+/, `/${locale}`));
  localStorage.setItem(env.localeKey, locale);
}
