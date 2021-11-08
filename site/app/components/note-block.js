import { Component } from 'jinge';

import _sty from './note-block.scss';

export class NoteBlock extends Component {
  static get template() {
    return `
<div class="\${alert ? 'alert ' : ''}\${warning ? 'warning ' : ''}\${tip ? 'tip ' : ''}note-block md-state-container md-selected">
  <div class="md-state-overlay"></div>
  <div class="md-state-content"><_slot /></div>
</div>`;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);
    this.alert = attrs.alert;
    this.warning = attrs.warning;
    this.tip = attrs.tip;
  }
}
