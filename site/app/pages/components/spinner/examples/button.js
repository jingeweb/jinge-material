import {
  Component
} from 'jinge';

import _tpl from './button.html';

export default class ExampleLoadingSpinner extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.loading = false;
  }
  submit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}