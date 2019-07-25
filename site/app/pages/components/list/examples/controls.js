import {
  Component,
  VM
} from 'jinge';

import _tpl from './controls.html';

export default class ExampleListControls extends Component {
  static get style() {
    return `
.full-control > .md-list {
  width: 320px;
  max-width: 100%;
  height: 400px;
  display: inline-block;
  overflow: auto;
  border: 1px solid rgba(0, 0, 0, 0.12);
  vertical-align: top;
}`;
  }

  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.ringtone = 'peace';
    this.settings = VM({
      wifi: true,
      bluetooth: false
    });
    this.notification = VM(['sound', 'vibrate']);
  }
}
