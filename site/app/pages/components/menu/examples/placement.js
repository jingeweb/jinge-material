import {
  Component
} from 'jinge';

import _tpl from './placement.html';

export default class ExampleMenuPlacement extends Component {
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
