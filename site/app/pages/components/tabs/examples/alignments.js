import {
  Component
} from 'jinge';

import _tpl from './alignments.html';

export default class ExampleTabsAlignments extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.md-tabs {
  margin-bottom: 24px;
}`;
  }
}
