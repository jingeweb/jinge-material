import {
  Component
} from 'jinge';

import _tpl from './media.html';

export default class ExampleMediaCard extends Component {
  static get style() {
    return `
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