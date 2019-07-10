import {
  Component
} from 'jinge';

import _tpl from './footer.html';
import _sty from './footer.scss';


export class Footer extends Component {
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
}

