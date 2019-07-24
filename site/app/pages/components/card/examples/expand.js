import {
  Component
} from 'jinge';

import _tpl from './expand.html';

export default class ExampleExpandCard extends Component {
  static get style() {
    return `
.card-expansion {
  height: 480px;
}
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}`;
  }
  static get template() {
    return _tpl;
  }
}