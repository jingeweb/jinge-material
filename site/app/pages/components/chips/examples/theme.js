import { Component, vm } from 'jinge';

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
    this.primary = vm(['Orange', 'Apple', 'Pineapple']);
    this.accent = vm(['Cat', 'Dog', 'Rabbit']);
  }
}
