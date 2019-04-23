import {
  Component
} from 'jinge';

import _tpl from './home.html';
import _sty from './home.scss';

export class PageHome extends Component {
  static get style() {
    return _sty;
  }
  static get template() {
    return _tpl;
  }
}
