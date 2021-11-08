import { Component, vm } from 'jinge';

import _tpl from './template.html';

export default class ExampleClipsTemplate extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return 'small { font-weight: 500; }';
  }

  constructor(attrs) {
    super(attrs);
    this.currentProject = 'Jinge Material';
    this.projects = vm(['Jinge Material', 'Ant Design', 'Angular Material']);
  }
}
