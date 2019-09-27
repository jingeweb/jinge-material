import './select.scss';

import {
  Symbol,
  SET_CONTEXT,
  NOTIFY,
  UPDATE_IF_NEED,
  AFTER_RENDER
} from 'jinge';
import {
  arrayPushIfNotExist,
  arrayRemove,
  isArray,
  isUndefined
} from 'jinge/util';
import {
  BaseField
} from '../field/base';

import _tpl from './select.html';

export const SELECT_PROVIDER = Symbol('select_provider');

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
    this.value = attrs.value;
    this[SET_CONTEXT](SELECT_PROVIDER, this);

    this.showSelect = false;
    this.showHelper = true;
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

  onHelperSwitched(v) {
    if (!v) return;
    setImmediate(() => {
      this._updateSelect(true);
    });
  }

  _updateSelect(d) {
    if (this.showHelper) {
      this.showHelper = false;
    } else if (!this.showSelect) {
      this.showHelper = true;
      return;
    }
    this._items.forEach(opt => {
      if (this._multiple) {
        opt.isSelected = isArray(this._value) && this._value.indexOf(opt.value) >= 0;
      } else {
        opt.isSelected = opt.value === this._value;
      }
    });
    this._updateLabel();
  }

  _updateLabel() {
    this.label = this._items.filter(opt => opt.isSelected).map(opt => {
      return opt.getText();
    }).join(', ');
  }

  _add(option) {
    arrayPushIfNotExist(this._items, option);
    option.isSelected = this.multiple ? (
      isArray(this.value) && this.value.indexOf(option.value) >= 0
    ) : (
      this.value === option.value
    );
  }

  _remove(option) {
    arrayRemove(this._items, option);
  }

  _toggleChecked(option, isChecked) {
    option.isSelected = isChecked;
    if (!isArray(this._value)) {
      return;
    }
    if (option.isSelected) {
      arrayPushIfNotExist(this._value, option.value);
    } else {
      arrayRemove(this._value, option.value);
    }
    this._updateLabel();
    this[NOTIFY]('change', this._value);
  }

  _toggleSelected(option) {
    this._items.forEach(opt => {
      opt.isSelected = false;
    });
    option.isSelected = true;
    if (this._value === option.value) {
      return this.closeSelect();
    }
    this._value = option.value;
    this.label = option.getText();
    this[NOTIFY]('change', this.value);
    this.closeSelect();
  }

  openSelect() {
    if (this.showSelect) return;
    this.showSelect = true;
  }

  closeSelect() {
    if (!this.showSelect) return;
    this.showSelect = false;
  }

  onFocus() {
    this.openSelect();
  }

  onKeyDown(evt) {
    console.log(evt.keyCode);
  }
}
