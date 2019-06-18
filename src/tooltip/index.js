import './index.scss';

import {
  Component, NOTIFY
} from 'jinge';

import _tpl from './index.html';


export class Tooltip extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.title = attrs.title || '';
    this.className = 'md-tooltip' + (attrs.class ? ' ' + attrs.class : '');
    this.placement = attrs.placement || 'bottom';
    this.active = attrs.active;
    this.trigger = attrs.trigger || 'hover';
    this.delay = attrs.delay || 150;
    this.offset = attrs.offset || 16;
    this.closeWhenOutsideClidk = attrs.closeWhenOutsideClidk !== false;
    this.transition = attrs.transition;
    this._popperOptions = attrs._popperOptions;
  }
  onUpdateActive(isActive) {
    this[NOTIFY]('update.active', isActive);
  }
}