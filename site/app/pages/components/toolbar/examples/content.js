import {
  Component
} from 'jinge';

import _tpl from './content.html';

export default class ExampleContentToolbar extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
div /deep/ > .md-toolbar + .md-toolbar {
  margin-top: 16px;
}`;
  }
}
