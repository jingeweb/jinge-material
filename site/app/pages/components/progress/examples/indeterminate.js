import { Component } from 'jinge';

import _tpl from './indeterminate.html';

export default class ExampleIndeterminateProgress extends Component {
  static get style() {
    return 'div ::deep > .md-progress-bar { margin: 24px; }';
  }

  static get template() {
    return _tpl;
  }
}
