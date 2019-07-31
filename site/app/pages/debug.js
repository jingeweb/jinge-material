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
.page-container {
  min-height: 300px;
  margin: 0 30px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.page-container /deep/ .md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.page-container /deep/ .md-content {
  padding: 16px;
}`;
  }

  constructor(attrs) {
    super(attrs);
    this.showNavigation = false;
    this.showSidepanel = false;
  }

  log(...args) {
    console.log(...args);
  }

  alert() {
    DialogAlert.show('you clicked me.');
  }
}
