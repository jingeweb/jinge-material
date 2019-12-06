import {
  Component,
  NOTIFY,
  i18n,
  _t
} from 'jinge';
import {
  setCurrentLocale,
  setCurrentTheme
} from '../service';

import './header.global.scss';

import _tpl from './header.html';
import _sty from './header.scss';

const locales = [{
  locale: 'zh_cn',
  name: '简体中文'
}, {
  locale: 'en',
  name: 'English'
}];
const themes = [{
  theme: 'default',
  name: _t('默认蓝')
}, {
  theme: 'default-dark',
  name: _t('暗夜蓝')
}, {
  theme: 'purple',
  name: _t('炫酷紫')
}, {
  theme: 'purple-dark',
  name: _t('暗夜紫')
}];

export class Header extends Component {
  static get style() {
    return _sty;
  }

  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.isSplash = attrs.isSplash;
    this._locales = locales;
    this._themes = themes;
    this.locale = locales.find(l => l.locale === i18n.locale).name;
  }

  toggleMenu() {
    this[NOTIFY]('toggle-menu');
  }

  changeLocale(loc) {
    this.locale = loc.name;
    setCurrentLocale(loc.locale);
  }

  changeTheme(theme) {
    setCurrentTheme(theme.theme);
  }
}
