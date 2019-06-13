
import '../../../style'; // import framework style
import './style'; // import app style

import {
  Component,
  bootstrap 
} from 'jinge';

import _tpl from './index.html';
import _sty from './index.scss';

import RouteStates from '../routes';

class App extends Component {
  static get template() {
    return _tpl;
  }
  static get style() {
    return _sty;
  }
  constructor(attrs) {
    super(attrs);
    this.isSplash = false;
    this._routes = RouteStates;
  }
}

bootstrap(App, document.getElementById('root-app'));
