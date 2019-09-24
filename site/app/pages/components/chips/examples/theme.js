import {
  Component,
  VM
} from 'jinge';

import _tpl from './theme.html';

export default class ExampleClipsTheme extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.md-chips {
  margin-bottom: 24px;
}

small {
  font-weight: 500;
}`;
  }

  constructor(attrs) {
    super(attrs);
    this.primary = VM([
      'Orange',
      'Apple',
      'Pineapple'
    ]);
    this.accent = VM([
      'Cat',
      'Dog',
      'Rabbit'
    ]);
  }
}
