import { Component, vm, _t } from 'jinge';

import { Snackbar } from '../../../../../../src/snackbar';

import _tpl from './simple.html';

function mockDeleteApi() {
  // mock server api
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() > 0.5) resolve();
      else reject(new Error('server error.'));
    }, 1500),
  );
}

export default class ExampleSimplePopover extends Component {
  static get style() {
    return 'p { display: flex; align-items: baseline; }';
  }

  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.some = vm({
        name: _t('未命名'),
      });
    }, true);
    this.isConfirmShown = false;
    this.fetching = false;
  }

  confirm() {
    console.log('user click yes.');
  }

  cancel() {
    console.log('user click no.');
  }

  submitDelete() {
    this.fetching = true;
    this.errorTip = null;
    mockDeleteApi().then(
      () => {
        Snackbar.show(_t('删除成功！'));
        this.isConfirmShown = false;
        this.fetching = false;
      },
      (err) => {
        this.errorTip = err.toString();
        this.fetching = false;
      },
    );
  }
}
