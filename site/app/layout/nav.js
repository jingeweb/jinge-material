import {
  Component
} from 'jinge';

import _tpl from './nav.html';
import _sty from './nav.scss';

export class Nav extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);
    this.isSplash = attrs.isSplash;
    this.menuShown = attrs.menuShown;
  }

  hideMenu() {
    this.menuShown = false;
  }
}
