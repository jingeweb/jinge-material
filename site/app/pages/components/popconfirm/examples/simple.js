import {
  Component,
  VM,
  _t
} from 'jinge';

import _tpl from './simple.html';

function mockDeleteApi() {
  // mock server api
  return new Promise((resolve, reject) => setTimeout(() => {
    if (Math.random() > 0.5) resolve();
    else reject('server error.');
  }, 3000));
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
    this.some = VM({
      name: _t('未命名')
    });
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
    mockDeleteApi().then(() => {
      this.isConfirmShown = false;
      this.fetching = false;
    }, err => {
      alert(err);
      this.fetching = false;
    });
  }
}