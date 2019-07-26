import {
  Component
} from 'jinge';
import {
  DialogAlert
} from '../../../src/dialog';
import _tpl from './debug.html';

export class PageDebug extends Component {
  static get template() {
    return _tpl;
  }

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

  constructor(attrs) {
    super(attrs);
    this.expandNews = true;
    this.expandSingle = false;
  }

  log(...args) {
    console.log(...args);
  }

  alert() {
    DialogAlert.show('you clicked me.');
  }
}
