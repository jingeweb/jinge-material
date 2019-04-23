import {
  Component
} from 'jinge';
import {
  titleManager
} from '../service';

import _sty from './page-container.scss';

export class PageContainer extends Component {
  static get template() {
    return `
<div class="page-container main-container \${centered ? 'centered' : ''}">
  <_slot slot-use:default />
</div>`;
  }
  static get style() {
    return _sty;
  }
  constructor(attrs) {
    super(attrs);
    this.title = attrs.title;
    this.centered = !!attrs.centered;
  }
  get title() {
    return this._t;
  }
  set title(v) {
    if (this._t === v) return;
    this._t = v;
    titleManager.update(this._t);
  }
}