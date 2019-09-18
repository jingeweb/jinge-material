import {
  Component
} from 'jinge';

import _tpl from './icons.html';

export default class ExampleTabsIcons extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.md-tabs + .md-tabs {
  margin-top: 24px;
}`;
  }
}
