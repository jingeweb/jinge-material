import './index.scss';

import { Component } from 'jinge';

import _tpl from './index.html';

export class EmptyState extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.className = attrs.class;
    this.style = attrs.style;
    this.rounded = attrs.rounded;
    this.size = Number(attrs.size || 420);
    this.label = attrs.label;
    this.description = attrs.description;
  }
}
