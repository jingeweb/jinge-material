import {
  Component,
  VM
} from 'jinge';
import {
  DialogAlert
} from '../../../src/dialog';
import _tpl from './debug.html';

export class PageDebug extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.tt = true;
  }

  log(...args) {
    console.log(...args);
  }

  alert() {
    DialogAlert.show('you clicked me.');
  }
}
