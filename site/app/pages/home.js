import {
  Component,
  AFTER_RENDER
} from 'jinge';

import _tpl from './home.html';
import _sty from './home.scss';

import {
  pageState
} from '../service';

export class PageHome extends Component {
  static get style() {
    return _sty;
  }

  static get template() {
    return _tpl;
  }

  [AFTER_RENDER]() {
    pageState.isSplash = true;
  }
}
