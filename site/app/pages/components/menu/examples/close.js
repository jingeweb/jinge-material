import {
  Component
} from 'jinge';

import _tpl from './close.html';

export default class ExampleMenuAutoClose extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.md-menu {
  margin: 24px;
}`;
  }

  constructor(attrs) {
    super(attrs);
    this.closeOnClick = true;
    this.closeOnSelect = true;
    this.data = '';
  }
}
