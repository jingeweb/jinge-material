import {
  VM,
  Component,
  NOTIFY,
  I18N_WATCH,
  i18n
} from 'jinge';
import {
  setCurrentLocale
} from '../service';

import _tpl from './header.html';
import _sty from './header.scss';

const locales = VM([{
  locale: 'zh_cn',
  name: '简体中文'
}, {
  locale: 'en',
  name: 'English'
}]);

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
    this.locales = locales;
    this[I18N_WATCH](() => {
      this.locale = locales.find(l => l.locale === i18n.locale);
    }, true);
  }

  showMenu() {
    this[NOTIFY]('open-menu');
  }

  changeLocale(loc) {
    setCurrentLocale(loc);
  }
}
