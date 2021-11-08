import { Component, _t } from 'jinge';

import { DialogPrompt } from '../../../../../../src/dialog';
import { Snackbar } from '../../../../../../src/snackbar';

import _tpl from './prompt.html';

function mockDeleteApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve();
      else reject(new Error('net work error.'));
    }, 3000);
  });
}

export default class ExampleDialogPrompt extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.active = false;
    this.value = 'jinge';
  }

  show() {
    DialogPrompt.show(
      {
        title: _t('请输入您的名字：'),
        defaultValue: this.value,
        inputPlaceholder: _t('名字'),
        inputRequired: true,
        inputMaxlength: 30,
      },
      (input) => {
        if (!input.startsWith('a')) {
          return _t('名字必须以字符 a 打头！');
        }
        return mockDeleteApi();
      },
      () => {
        console.log('user click cancel.');
      },
    );
  }

  onConfirm(input) {
    this.value = input;
    // eslint-disable-next-line no-template-curly-in-string
    Snackbar.show(
      _t('你好，${name}', {
        name: this.value,
      }),
    );
  }
}
