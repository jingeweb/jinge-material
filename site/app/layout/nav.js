import { Component } from 'jinge';
import { router } from '../service';

import _tpl from './nav.html';
import _sty from './nav.scss';

function _r(routeInfo) {
  routeInfo = routeInfo._routePath;
  return routeInfo.length > 0 ? routeInfo[routeInfo.length - 1].route : null;
}

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
    this.__notify('hide-menu');
  }

  __afterRender() {
    this._obd = router.afterEach((from, to) => {
      if (_r(from) !== _r(to)) {
        document.documentElement.scrollTop = 0;
      }
      this.hideMenu();
    });
  }

  __beforeDestroy() {
    this._obd();
  }
}
