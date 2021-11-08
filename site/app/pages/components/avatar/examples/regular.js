import { Component } from 'jinge';

import _tpl from './regular.html';

export default class ExampleAvatarRegular extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.md-avatar {
  margin-right: 4px;
}`;
  }
}
