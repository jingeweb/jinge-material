
// import framework base style
import '../../../style';

// import app style
import './style';

import {
  Component,
  bootstrap,
  ON,
  i18n,
  SET_CONTEXT
} from 'jinge';
import {
  UIROUTER_CONTEXT
} from 'jinge-ui-router';

import _tpl from './index.html';
import _sty from './index.scss';

import {
  router,
  pageState,
  IS_SPLASH_CHANGED,
  setCurrentLocale
} from '../service';

class App extends Component {
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
    this[SET_CONTEXT](UIROUTER_CONTEXT, router);

    this.isSplash = pageState.isSplash;
    this.menuShown = false;
    pageState[ON](IS_SPLASH_CHANGED, isSplash => {
      this.isSplash = isSplash;
    });
  }
}

setCurrentLocale(i18n.locale);
bootstrap(App, document.getElementById('root-app'));
