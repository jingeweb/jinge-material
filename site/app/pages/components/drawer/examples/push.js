import {
  Component
} from 'jinge';

import _tpl from './push.html';

export default class ExampleDrawerTemporary extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.md-drawer-container {
  margin: 0 30px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.md-drawer-container /deep/ .md-content {
  padding: 16px;
}
.md-drawer-container.md-active /deep/ .md-content {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}
`;
  }

  constructor(attrs) {
    super(attrs);
    this.showNavigation = false;
    this.showSidepanel = false;
  }
}
