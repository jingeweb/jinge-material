import {
  Component
} from 'jinge';

import _tpl from './material-icons.html';

export default class ExampleMaterialIcons extends Component {
  static get style() {
    return `
div { font-size: 48px; }
div /deep/ .md-icon.my-icon {
  color: #6200ee;
}
`;
  }
  static get template() {
    return _tpl;
  }
}