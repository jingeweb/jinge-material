import './wave.scss';

import {
  Component,
  AFTER_RENDER,
  NOTIFY,
  setImmediate
} from 'jinge';

import _tpl from './wave.html';

export class Wave extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.uuid = attrs.uuid;
    this.style = attrs.style;
    this.className = attrs.class;
    this.animating = false;
  }

  [AFTER_RENDER]() {
    setImmediate(() => {
      this.animating = true;
    });
  }

  onTransition(action) {
    if (action === 'after-enter') {
      this.animating = false;
      this[NOTIFY]('end', this.uuid);
    }
  }
}
