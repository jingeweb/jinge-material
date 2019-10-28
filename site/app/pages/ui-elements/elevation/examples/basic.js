import {
  Component
} from 'jinge';

import _tpl from './basic.html';

export default class ExampleElevation extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.elevation-demo {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
}

.md-content {
  width: 100px;
  height: 100px;
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}`;
  }
}
