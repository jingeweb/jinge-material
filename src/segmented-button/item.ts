import { Component, Attributes } from 'jinge';
import { SEGMENTEDBUTTON_PROVIDER } from './common';
import _tpl from './item.html';
import { SegmentedButton } from './button';

export interface OptionAttrs {
  value?: unknown;
  disabled?: boolean;
  active?: boolean;
}
export class SegmentedButtonItem extends Component {
  static template = _tpl;

  value: unknown;
  disabled: boolean;
  selected: boolean;

  _parent: SegmentedButton;

  constructor(attrs: Attributes<OptionAttrs>) {
    super(attrs);
    this.value = attrs.value;
    this.disabled = attrs.disabled;
    this.selected = false;
    this._parent = this.__getContext(SEGMENTEDBUTTON_PROVIDER);
    this._parent._add(this);
  }

  onclick() {
    this._parent._select(this);
  }
}
