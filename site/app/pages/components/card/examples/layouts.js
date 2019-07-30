import {
  Component
} from 'jinge';

import _sty from './layouts.scss';
import _tpl from './layouts.html';

import {
  DialogAlert
} from '../../../../../../src/dialog/dialog-alert';

export default class ExampleLayoutsCard extends Component {
  static get style() {
    return _sty;
  }

  static get template() {
    return _tpl;
  }

  sendMessage() {
    DialogAlert.show('Send a message...');
  }

  doACall() {
    DialogAlert.show('Calling someone...');
  }
}
