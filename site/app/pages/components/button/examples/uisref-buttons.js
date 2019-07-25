import {
  Component
} from 'jinge';

import _tpl from './uisref-buttons.html';

export default class ExapmleSrefButtons extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `small {
  display: block;
}`;
  }
}
