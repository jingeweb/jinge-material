import {
  Component
} from 'jinge';

import {
  DialogConfirm
} from '../../../../../../src/dialog';

import _tpl from './confirm.html';

function mockDeleteApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve();
      else reject(new Error('net work error.'));
    }, 3000);
  });
}

export default class ExampleDialogConfirm extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.active = false;
    this.value = null;
  }

  show() {
    DialogConfirm.show({
      title: 'Confirm to delete?',
      content: 'This message is shown by calling DialogConfirm.show()'
    }, () => {
      console.log('user click confirm.');
      return mockDeleteApi();
    }, () => {
      console.log('user click cancel.');
    });
  }

  onCancel() {
    this.value = 'Disagreed';
  }

  onConfirm() {
    this.value = 'Agreed';
  }
}
