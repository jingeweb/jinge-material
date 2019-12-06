import {
  Component,
  AFTER_RENDER,
  BEFORE_DESTROY,
  NOTIFY
} from 'jinge';
import {
  router
} from '../service';

import _tpl from './nav.html';
import _sty from './nav.scss';

export class Nav extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);
    this.isSplash = attrs.isSplash;
    this.menuShown = attrs.menuShown;
    this._obd = null;
  }

  hideMenu() {
    this.menuShown = false;
    this[NOTIFY]('hide-menu');
  }

  [AFTER_RENDER]() {
    this._obd = router.transitionService.onBefore({}, () => {
      document.documentElement.scrollTop = 0;
      this.hideMenu();
    });
  }

  [BEFORE_DESTROY]() {
    this._obd.dispose();
  }
}
