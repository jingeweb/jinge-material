import {
  Component
} from 'jinge';

import _tpl from './regular-buttons.html';
import _sty from './regular-buttons.scss';

export default class ExampleRegularButtons extends Component {
  static get template() {
    return _tpl;
  }
  static get style() {
    return _sty;
  }
  constructor(attrs) {
    super(attrs);
    this.loading = false;
    this.v = 0;
    setInterval(() => {
      if (this.v === 100) {
        this.v = 0;
      } else {
        this.v += 20;
      }
    }, 1000);
  }
  onClick(evt) {
    console.log('click button', evt);
  }
  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}