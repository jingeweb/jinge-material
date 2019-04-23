import './wave.scss';

import {
  Component
} from 'jinge';
import {
  setImmediate
} from 'jinge/util';

import _tpl from './wave.html';

export class Wave extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.style = attrs.style;
    this.className = attrs.class;
    this.animating = false;
  }
  afterRender() {
    setImmediate(() => {
      this.animating = true;
    });
  }
  onTransition(action) {
    if (action === 'after-enter') {
      this.animating = false;
      this.notify('end');
    }
  }
}