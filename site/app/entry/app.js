import { Component } from 'jinge';

import { router } from '../service/router';
import { pageState } from '../service/page-state';
import _tpl from './app.html';
import _sty from './app.scss';

export default class App extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);

    // this code is important!
    // register ui router in root component
    this.__setContext('router', router);

    this.isSplash = pageState.isSplash;
    this.appTitle = pageState.title;
    this.menuShown = false;
    pageState.__on('is-splash-change', (isSplash) => {
      this.isSplash = isSplash;
    });
    pageState.__on('title-change', (title) => {
      this.appTitle = title;
    });

    this.hideFooter = true;
    router.beforeEach(() => {
      this.hideFooter = true;
    });
    router.afterEach(() => {
      this.hideFooter = false;
    });
  }

  __afterRender() {
    router.start();
  }
}
