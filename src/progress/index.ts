import { Attributes, Component } from 'jinge';

import _tpl from './index.html';

export interface ProgressAttrs {
  mode?: 'determinate' | 'indeterminate' | 'query' | 'buffer';
  value?: number;
  buffer?: number;
}
export class Progress extends Component {
  static template = _tpl;

  mode: ProgressAttrs['mode'];
  value: number;
  buffer: number;

  constructor(attrs: Attributes<ProgressAttrs>) {
    super(attrs);
    this.mode = attrs.mode || 'determinate';
    this.value = Number(attrs.value || 0);
    this.buffer = Number(attrs.buffer || 0);
  }
}
