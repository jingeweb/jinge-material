import {
  Component
} from 'jinge';

import _tpl from './static.html';
import {
  Snackbar
} from '../../../../../../src/snackbar';

export default class ExampleSnackbarStatic extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._inc = 0;
  }

  show() {
    Snackbar.show({
      position: Math.random() > 0.5 ? 'center' : 'left',
      message: `Hello, World ${this._inc++}.`,
      duration: (Math.random() * 3000 | 0) + 1000
    });
  }
}
