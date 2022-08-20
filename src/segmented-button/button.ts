import { Attributes, Component, isArray, isUndefined } from 'jinge';
import { SEGMENTEDBUTTON_PROVIDER } from './common';
import { SegmentedButtonItem } from './item';
import _tpl from './button.html';

export interface SegmentedButtonAttrs {
  multiple?: boolean;
  /** 高度压缩，支持 0,1,2,3，默认为 0 即不压缩。参看 https://m3.material.io/components/segmented-buttons/specs */
  density?: string | number;
}

export class SegmentedButton extends Component {
  static template = _tpl;

  _items: SegmentedButtonItem[];
  multi: boolean;
  _dens: number;
  _val: unknown;

  constructor(attrs: Attributes<SegmentedButtonAttrs>) {
    super(attrs);
    this.multi = attrs.multiple;
    this._dens = Number(attrs.density || 0);
    this.value = attrs.value;
    this._items = [];
    this.__setContext(SEGMENTEDBUTTON_PROVIDER, this); // paased to children
  }

  get value() {
    return this._val;
  }

  set value(v: unknown) {
    if (this.multi && !isUndefined(v) && v !== null && !isArray(v)) {
      throw new Error('value of multiple mode segmented button must be array');
    }
    this._val = v;
    if (!this._items?.length) {
      return;
    }
    if (this.multi) {
      v &&
        this._items.forEach((item) => {
          item.selected = (v as unknown[]).some((ev) => item.value === ev);
        });
    } else {
      this._items.forEach((item) => {
        item.selected = item.value === v;
      });
    }
  }

  _add(item: SegmentedButtonItem) {
    this._items.push(item);
    if (this.multi) {
      if (Array.isArray(this._val)) {
        item.selected = (this._val as unknown[]).includes(item.value);
      }
    } else {
      item.selected = item.value === this._val;
    }
  }

  _remove(item: SegmentedButtonItem) {
    const idx = this._items.indexOf(item);
    this._items.splice(idx, 1);
    if (!item.selected) {
      return;
    }
    if (this.multi) {
      if (Array.isArray(this._val)) {
        const v = this._val as unknown[];
        const i = v.indexOf(item.value);
        v.splice(i, 1);
      }
    } else {
      this._val = undefined;
    }
    this.__notify('change', this._val);
  }

  _select(item: SegmentedButtonItem) {
    if (this.multi) {
      item.selected = !item.selected;
      this._val = this._items.filter((it) => it.selected).map((it) => it.value);
    } else {
      if (item.value === this._val) {
        return;
      }
      this._items.forEach((eachItem) => {
        eachItem.selected = eachItem === item;
      });
      this._val = item.value;
    }
    this.__notify('change', this._val);
  }
}
