import {
  Component
} from 'jinge';

import _tpl from './svg-icons.html';

export default class ExampleSvgIcons extends Component {
  static get template() {
    return _tpl;
  }
  static get style() {
    return 'div { font-size: 48px; }';
  }
}