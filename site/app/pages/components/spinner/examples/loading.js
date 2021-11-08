import { Component } from 'jinge';

import _tpl from './loading.html';

export default class ExampleLoadingSpinner extends Component {
  static get style() {
    return `p {
  display: inline-flex;
  align-items: center;
}
p ::deep > .md-spinner + .md-spinner {
  margin: 6px;
}
`;
  }

  static get template() {
    return _tpl;
  }
}
