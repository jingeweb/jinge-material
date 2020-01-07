import {
  Component
} from 'jinge';

import _tpl from './shift.html';

export default class ExampleBottomBarShift extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.out {
  display: flex;
  align-items: center;
}
.phone-viewport {
  width: 322px;
  margin-right: 6px;
  height: 200px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.26);
  background: rgba(0, 0, 0, 0.06);
}`;
  }
}
