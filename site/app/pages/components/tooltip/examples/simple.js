import {
  Component
} from 'jinge';

import _tpl from './simple.html';

export default class ExampleSimplePopover extends Component {
  static get style() {
    return 'p { display: flex; align-items: baseline; }';
  }
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.isTooltipShown = false;
  }
}