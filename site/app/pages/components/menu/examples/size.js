import {
  Component
} from 'jinge';

import _tpl from './size.html';

export default class ExampleMenuSize extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.md-menu {
  margin: 24px;
}`;
  }
}
