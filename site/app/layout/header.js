import {
  Component
} from 'jinge';

import _tpl from './header.html';
import _sty from './header.scss';


export class Header extends Component {
  static get style() {
    return _sty;
  }
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.isSplash = attrs.isSplash;
  }
  showMenu() {
    
  }
}

