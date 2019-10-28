import {
  Component
} from 'jinge';

import _tpl from './nested.html';
import _sty from './nested.scss';

export default class ExampleLayoutNested extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }
}
