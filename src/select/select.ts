import {
  __,
  Component,
  attrs as wrapAttrs,
  arrayPushIfNotExist,
  arrayRemove,
  isArray,
  isUndefined,
  createElementWithoutAttrs,
  Attributes,
} from 'jinge';
import { BaseField, BaseFieldAttrs } from '../field/base';

import _tpl from './select.html';
import { Option } from './option';

export const SELECT_PROVIDER = Symbol('select_provider');
export const HELPER_MODE = Symbol('helper_mode');

export interface SelectAttrs {
  id?: string;
  name?: string;
  multiple?: boolean;
  dense?: boolean;
  alignTrigger?: string;
  fullWidth?: boolean;
}
//! @jinge-component-parse 继承的 BaseField 无法被编译器识别，强制标记需要 parse。
export class Select extends BaseField {
  static template = _tpl;

  _multiple?: boolean;
  dense?: boolean;
  alignTrigger?: string;
  fullwidth?: boolean;
  label: string;
  _items: Option[];
  _helper: {
    el: Component;
    $dom: HTMLElement;
    items: Option[];
  };
  showSelect: boolean;

  constructor(attrs: Attributes<SelectAttrs & BaseFieldAttrs>) {
    super(attrs, '<md-select>');
    this.id = attrs.id;
    this.name = attrs.name;
    this.multiple = !!attrs.multiple;
    this.dense = attrs.dense;
    this.alignTrigger = attrs.alignTrigger;
    this.fullwidth = attrs.fullWidth;

    this.label = '';
    this._items = [];
    this._helper = {
      el: null,
      $dom: null,
      items: [],
    };

    this.value = attrs.value;
    this.__setContext(SELECT_PROVIDER, this);

    this.showSelect = false;
  }

  get multiple() {
    return this._multiple;
  }

  set multiple(v) {
    if (!isUndefined(this._multiple)) {
      throw new Error('changing multiple attribute is not support.');
    }
    this._multiple = v;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    if (this._value === v) return;
    this._value = v;
    this.__updateIfNeed(this._updateSelect);
  }

  __afterRender() {
    this._updateSelect();
  }

  _renderHelperOptions() {
    const $container = createElementWithoutAttrs('div');
    const el = new Component(
      wrapAttrs({
        [__]: {
          context: this[__].context,
          slots: this[__].slots,
        },
      }),
    );
    el.__setContext(HELPER_MODE, true);
    el.__renderToDOM($container as HTMLElement, false);
    this._helper.$dom = $container as HTMLElement;
    this._helper.el = el as Component;
  }

  _destroyHelperOptions() {
    this._helper.el.__destroy(true);
    this._helper.el = null;
    this._helper.$dom = null;
  }

  _updateSelect() {
    if (isUndefined(this._value) || this._value === null) {
      this._items.forEach((opt) => {
        opt.isSelected = false;
      });
      this.label = '';
      return;
    }
    if (!this.showSelect) {
      this._renderHelperOptions();
    }
    const items = this.showSelect ? this._items : this._helper.items;
    const label: string[] = [];
    items.forEach((opt) => {
      this._updateOptionSelected(opt);
      if (opt.isSelected) {
        label.push(opt.getText());
      }
    });
    this.label = label.join(', ');
    if (!this.showSelect) {
      this._destroyHelperOptions();
    }
  }

  _updateOptionSelected(option: Option) {
    option.isSelected = this.multiple
      ? isArray(this.value) && this.value.indexOf(option.value) >= 0
      : this.value === option.value;
  }

  _add(option: Option, isHelper: boolean) {
    arrayPushIfNotExist(isHelper ? this._helper.items : this._items, option);
    this._updateOptionSelected(option);
  }

  _remove(option: Option, isHelper: boolean) {
    arrayRemove(isHelper ? this._helper.items : this._items, option);
  }

  /**
   * handle multi select
   */
  _toggleChecked(option: Option, isChecked: boolean) {
    option.isSelected = isChecked;
    this.label = this._items
      .filter((opt) => {
        return opt.isSelected;
      })
      .map((opt) => {
        return opt.getText();
      })
      .join(', ');
    if (!isArray(this._value)) {
      return;
    }
    if (option.isSelected) {
      arrayPushIfNotExist(this._value, option.value);
    } else {
      arrayRemove(this._value, option.value);
    }
    this.__notify('change', this._value);
  }

  /**
   * handle single select
   */
  _toggleSelected(option: Option) {
    this._items.forEach((opt) => {
      opt.isSelected = opt === option;
    });
    if (this._value === option.value) {
      return this.closeSelect();
    }
    this._value = option.value;
    this.label = option.getText();
    this.__notify('change', this.value);
    this.closeSelect();
  }

  openSelect() {
    if (this.showSelect || this.disabled) return;
    this.showSelect = true;
  }

  closeSelect() {
    if (!this.showSelect) return;
    this.showSelect = false;
  }

  onFocus() {
    this.openSelect();
  }
}
