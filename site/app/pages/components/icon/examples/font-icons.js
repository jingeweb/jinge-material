import {
  Component
} from 'jinge';

import _tpl from './font-icons.html';

export default class ExampleFontIcons extends Component {
  static get template() {
    return _tpl;
  }
  static get style() {
    return 'div { font-size: 48px; }';
  }
}