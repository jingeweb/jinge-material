import {
  Component
} from 'jinge';

import _tpl from './button.html';

export default class ExampleBadgeButton extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.demo-badge > div {
  margin-bottom: 16px;
}`;
  }
}
