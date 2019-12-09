import {
  Component
} from 'jinge';

import _tpl from './basic.html';

export default class ExampleStates extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.states-demo {
  background: var(--demo-states-background);
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
}

.md-state-container {
  width: 200px;
  height: 200px;
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}`;
  }
}
