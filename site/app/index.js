import {
  Component,
  bootstrap 
} from 'jinge';

import './test.scss';
import _sty from './t.scss';

class App extends Component {
  static get style() {
    return _sty;
  }
  static get template() {
    return '<p><_t text="hello, world!"/></p>';
  }
  constructor(attrs) {
    super(attrs);
  }
}

window.__App.bootstrap = () => {
  bootstrap(App, document.getElementById(window.__App.renderId));
};
