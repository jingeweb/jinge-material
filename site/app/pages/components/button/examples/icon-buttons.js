import {
  Component
} from 'jinge';

import _tpl from './icon-buttons.html';

export default class ExapmleIconButtons extends Component {
  static get template() {
    return _tpl;
  }
  static get style() {
    return `small {
  display: block;
}`;
  }
  onClick(evt) {
    console.log('click button', evt);
  }
}