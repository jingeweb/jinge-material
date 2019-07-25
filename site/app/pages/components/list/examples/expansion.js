import {
  Component
} from 'jinge';

import _tpl from './expansion.html';

export default class ExampleListExpansion extends Component {
  static get style() {
    return `
.full-control {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
}

.list {
  width: 320px;
}

.full-control > .md-list {
  width: 320px;
  max-width: 100%;
  height: 400px;
  display: inline-block;
  overflow: auto;
  border: 1px solid rgba(0, 0, 0, 0.12);
  vertical-align: top;
}

.control {
  min-width: 250px;
  display: flex;
  flex-direction: column;
  padding: 16px;
}`;
  }

  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.expandNews = false;
    this.expandSingle = false;
  }
}
