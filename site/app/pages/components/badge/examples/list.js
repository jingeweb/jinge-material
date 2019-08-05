import {
  Component
} from 'jinge';

import _tpl from './list.html';

export default class ExampleBadgeList extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.md-list {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(0, 0, 0, 0.12);
}`;
  }
}
