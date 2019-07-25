import {
  Component
} from 'jinge';

import _tpl from './query.html';

export default class ExampleQueryProgress extends Component {
  static get style() {
    return 'div /deep/ > .md-progress-bar { margin: 24px; }';
  }

  static get template() {
    return _tpl;
  }
}
