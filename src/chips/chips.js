import {
  uid,
  Component,
  NOTIFY,
  isArray,
  setImmediate,
  GET_REF,
  UPDATE_IF_NEED
} from 'jinge';

import _tpl from './chips.html';

export class Chips extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs, 'md-input');
    this.id = attrs.id || `md-chips-${uid()}`;
    this.inputType = attrs.inputType || 'text';
    this.className = attrs.class;
    this.style = attrs.style;
    this.placeholder = attrs.placeholder;
    this.static = attrs.static;
    this.limit = Number(attrs.limit || 0);
    this.value = attrs.value;
    this.needCheckDuplicated = attrs.checkDuplicated;
    this.inputValue = '';
    this.duplicatedChip = null;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    if (!v) v = [];
    if (this._value === v) return;
    if (v && !isArray(v)) {
      console.error('<md-clips>: typeof value attribute must be Array.');
      return;
    }
    this._value = v;
    this.checkDuplicated();
  }

  checkDuplicated() {
    const inputValue = this.inputValue;
    if (!this.value.includes(inputValue)) {
      this.duplicatedChip = null;
      return false;
    }
    if (!this.needCheckDuplicated) {
      return false;
    }
    this.duplicatedChip = inputValue;
  }

  insertChip() {
    const inputValue = this.inputValue;
    if (!inputValue || (this.limit && this.value.length >= this.limit)) {
      return;
    }

    if (this.value.includes(inputValue)) {
      this.duplicatedChip = null;
      setImmediate(() => {
        this.duplicatedChip = inputValue;
      });
      return;
    }

    this.value.push(inputValue);
    this[NOTIFY]('change', this.value);
    this[NOTIFY]('insert', inputValue);
    this.inputValue = '';
  }

  removeChip(chip, evt) {
    evt && evt.stopPropagation();
    const index = this.value.indexOf(chip);

    this.value.splice(index, 1);
    this[NOTIFY]('change', this.value);
    this[NOTIFY]('delete', chip, index);
    setImmediate(() => this.focus());
  }

  focus() {
    const ipt = this[GET_REF]('input');
    ipt && ipt.focus();
  }

  onInputRender(ipt) {
    this[UPDATE_IF_NEED](this.focus);
  }

  onInputDestroy(ipt) {
    ipt.onBlur();
  }

  handleBackRemove() {
    if (!this.inputValue) {
      this.removeChip(this.value[this.value.length - 1]);
    }
  }

  handleInput(value) {
    this.inputValue = value;
    if (this.needCheckDuplicated) {
      this.checkDuplicated();
    } else {
      this.duplicatedChip = null;
    }
  }

  onKeyDown(evt) {
    if (evt.keyCode === 13) {
      this.insertChip();
    } else if (evt.keyCode === 8) {
      this.handleBackRemove();
    }
  }

  onChipClicked(chip, evt) {
    this[NOTIFY]('chip-clicked', chip, evt);
  }
}
