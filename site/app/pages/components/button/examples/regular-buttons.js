import {
  Component
} from 'jinge';

import _tpl from './regular-buttons.html';
import _sty from './regular-buttons.scss';

export default class ExampleRegularButtons extends Component {
  static get template() {
    return _tpl;
  }
  static get style() {
    return _sty;
  }
  onClick(evt) {
    console.log('click button', evt);
  }
}