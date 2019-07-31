
// import framework base style
import '../../../style';

// import pure css components:
import '../../../src/elevation';
import '../../../src/layout';

// import app style
import './style';

import {
  Component,
  bootstrap,
  ON
} from 'jinge';

import _tpl from './index.html';
import _sty from './index.scss';

import RouteStates from '../routes';
import {
  pageState, IS_SPLASH_CHANGED
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
    this.isSplash = pageState.isSplash;
    this._routes = RouteStates;
    pageState[ON](IS_SPLASH_CHANGED, isSplash => {
      this.isSplash = isSplash;
    });
  }
}

bootstrap(App, document.getElementById('root-app'));
