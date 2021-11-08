import { Component } from 'jinge';

import _tpl from './material-icons.html';

export default class ExampleMaterialIcons extends Component {
  static get style() {
    return `
div { font-size: 48px; }
div ::deep .md-icon.my-icon {
  color: #6200ee;
}
p {
  color: #2196f3;
  font-size: 40px;
  line-height: 1.2em;
}
p > span {
  display: inline-block;
  vertical-align: middle;
}
p ::deep .md-icon {
  font-size: 1.2em;
}
`;
  }

  static get template() {
    return _tpl;
  }
}
