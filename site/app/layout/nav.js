import {
  Component,
  AFTER_RENDER,
  GET_CONTEXT,
  BEFORE_DESTROY,
  NOTIFY
} from 'jinge';
import {
  UIROUTER_CONTEXT
} from 'jinge-ui-router';

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
    this._router = this[GET_CONTEXT](UIROUTER_CONTEXT);
  }

  hideMenu() {
    this.menuShown = false;
    this[NOTIFY]('hide-menu');
  }

  [AFTER_RENDER]() {
    this._obd = this._router.transitionService.onBefore({}, () => {
      this.hideMenu();
    });
  }

  [BEFORE_DESTROY]() {
    this._obd.dispose();
  }
}
