import {
  Component
} from 'jinge';

import _tpl from './dense.html';

export default class ExampleBadgeDense extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.demo-badge > div {
  margin-bottom: 16px;
}`;
  }
}
