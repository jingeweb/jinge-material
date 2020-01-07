import './wave.scss';

import {
  Component
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

  __afterRender() {
    this.animating = true;
  }

  onTransition(action) {
    if (action === 'after-enter') {
      this.animating = false;
      this.__notify('end', this.uuid);
    }
  }
}
