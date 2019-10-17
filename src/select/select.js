import './select.scss';

import {
  Symbol,
  SET_CONTEXT,
  NOTIFY,
  UPDATE_IF_NEED,
  AFTER_RENDER,
  ARG_COMPONENTS,
  Component,
  wrapAttrs,
  CONTEXT
} from 'jinge';
import {
  arrayPushIfNotExist,
  arrayRemove,
  isArray,
  isUndefined
} from 'jinge/util';
import {
  DESTROY,
  RENDER_TO_DOM
} from 'jinge/core/component';
import {
  createElementWithoutAttrs
} from 'jinge/dom';
import {
  BaseField
} from '../field/base';

import _tpl from './select.html';

export const SELECT_PROVIDER = Symbol('select_provider');
export const HELPER_MODE = Symbol('helper_mode');

export class Select extends BaseField {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.id = attrs.id;
    this.name = attrs.name;
    this.multiple = !!attrs.multiple;
    this.dense = attrs.dense;
    this.alignTrigger = attrs.alignTrigger;
    this.fullWidth = attrs.fullWidth;

    this.label = '';
    this._items = [];
    this._helper = {
      el: null,
      $dom: null,
      items: []
    };

    this.value = attrs.value;
    this[SET_CONTEXT](SELECT_PROVIDER, this);

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
    this[UPDATE_IF_NEED](this._updateSelect);
  }

  [AFTER_RENDER]() {
    this._updateSelect();
  }

  _renderHelperOptions() {
    const $container = createElementWithoutAttrs('div');
    const el = new Component(wrapAttrs({
      [CONTEXT]: this[CONTEXT],
      [ARG_COMPONENTS]: this[ARG_COMPONENTS]
    }));
    el[SET_CONTEXT](HELPER_MODE, true);
    el[RENDER_TO_DOM]($container, false);
    this._helper.$dom = $container;
    this._helper.el = el;
  }

  _destroyHelperOptions() {
    this._helper.el[DESTROY](true);
    this._helper.el = null;
    this._helper.$dom = null;
  }

  _updateSelect() {
    if (isUndefined(this._value) || this._value === null) {
      this._items.forEach(opt => {
        opt.isSelected = false;
      });
      this.label = '';
      return;
    }
    if (!this.showSelect) {
      this._renderHelperOptions();
    }
    const items = this.showSelect ? this._items : this._helper.items;
    const label = [];
    items.forEach(opt => {
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

  _updateOptionSelected(option) {
    option.isSelected = this.multiple ? (
      isArray(this.value) && this.value.indexOf(option.value) >= 0
    ) : (
      this.value === option.value
    );
  }

  _add(option, isHelper) {
    arrayPushIfNotExist(isHelper ? this._helper.items : this._items, option);
    this._updateOptionSelected(option);
  }

  _remove(option, isHelper) {
    arrayRemove(isHelper ? this._helper.items : this._items, option);
  }

  /**
   * handle multi select
   */
  _toggleChecked(option, isChecked) {
    option.isSelected = isChecked;
    this.label = this._items.filter(opt => {
      return opt.isSelected;
    }).map(opt => {
      return opt.getText();
    }).join(', ');
    if (!isArray(this._value)) {
      return;
    }
    if (option.isSelected) {
      arrayPushIfNotExist(this._value, option.value);
    } else {
      arrayRemove(this._value, option.value);
    }
    this[NOTIFY]('change', this._value);
  }

  /**
   * handle single select
   */
  _toggleSelected(option) {
    this._items.forEach((opt, i) => {
      opt.isSelected = opt === option;
    });
    if (this._value === option.value) {
      return this.closeSelect();
    }
    this._value = option.value;
    this.label = option.getText();
    this[NOTIFY]('change', this.value);
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
