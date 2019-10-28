import {
  Component
} from 'jinge';

import _tpl from './hide.html';
import _sty from './hide.scss';

export default class ExampleLayoutHide extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }
}
