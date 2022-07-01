import './wave.scss';

import { Component, Attributes } from 'jinge';
import _tpl from './wave.html';

export interface WaveAttrs {
  uuid: string;
  style?: string;
  class?: string;
}
export class Wave extends Component {
  uuid: string;
  animating: boolean;

  static template = _tpl;

  constructor(attrs: Attributes<WaveAttrs>) {
    super(attrs);
    this.uuid = attrs.uuid;
    this.animating = false;
  }

  __afterRender() {
    this.animating = true;
  }

  onTransition(action: string) {
    if (action === 'after-enter') {
      this.animating = false;
      this.__notify('end', this.uuid);
    }
  }
}
