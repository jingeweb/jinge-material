import {
  Component
} from 'jinge';

import _tpl from './sizes.html';
import _sty from './sizes.scss';

export default class ExampleLayoutSizes extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }
}
