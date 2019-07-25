import './simple.scss';

import {
  Component
} from 'jinge';

import _tpl from './simple.html';

export default class ExampleSimplePopover extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.isPopShown = false;
  }
}
