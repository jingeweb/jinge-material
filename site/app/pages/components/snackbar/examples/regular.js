import {
  Component
} from 'jinge';

import _tpl from './regular.html';

export default class ExampleSnackbarRegular extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.position = 'left';
    this.showSnackbar = false;
  }

  log(msg) {
    console.log(msg);
  }
}
