import {
  Component
} from 'jinge';

import {
  DialogAlert
} from '../../../../../../src/components/dialog';

import _tpl from './alert.html';

export default class ExampleDialogAlert extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.first = false;
    this.second = false;
  }
  show() {
    DialogAlert.show({
      title: 'Hello',
      content: 'This message is shown by calling DialogAlert.show()'
    }, () => {
      console.log('callback after close.');
    });
  }
}