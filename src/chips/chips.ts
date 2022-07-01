import { uid, Component, isArray, setImmediate, Attributes } from 'jinge';
import { Input } from '../input';
import { Chip } from './chip';

import _tpl from './chips.html';

export interface ChipsAttrs {
  id?: string;
  inputType?: 'text';
  placeholder?: string;
  static?: boolean;
  limit?: number;
  value?: unknown[];
  checkDuplicated?: boolean;
}
export class Chips extends Component {
  static template = _tpl;

  id: string;
  inputType: 'text';
  placeholder: string;
  static: boolean;
  limit: number;
  _value?: unknown[];
  needCheckDuplicated?: boolean;
  inputValue: string;
  duplicatedChip: unknown;

  constructor(attrs: Attributes<ChipsAttrs>) {
    super(attrs);
    this.id = attrs.id || `md-chips-${uid()}`;
    this.inputType = attrs.inputType || 'text';
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
      // eslint-disable-next-line no-console
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
    return true;
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
    this.__notify('change', this.value);
    this.__notify('insert', inputValue);
    this.inputValue = '';
  }

  removeChip(chip: unknown, evt?: Event) {
    evt?.stopPropagation();
    const index = this.value.indexOf(chip);

    this.value.splice(index, 1);
    this.__notify('change', this.value);
    this.__notify('delete', chip, index);
    setImmediate(() => this.focus());
  }

  focus() {
    const ipt = this.__getRef<Input>('input');
    ipt?.focus();
  }

  onInputRender() {
    this.__updateIfNeed(this.focus);
  }

  onInputDestroy(ipt: Input) {
    ipt.onBlur();
  }

  handleBackRemove() {
    if (!this.inputValue) {
      this.removeChip(this.value[this.value.length - 1]);
    }
  }

  handleInput(value: string) {
    this.inputValue = value;
    if (this.needCheckDuplicated) {
      this.checkDuplicated();
    } else {
      this.duplicatedChip = null;
    }
  }

  onKeyDown(evt: KeyboardEvent) {
    if (evt.key === 'Enter') {
      this.insertChip();
    } else if (evt.key === 'Backspace') {
      this.handleBackRemove();
    }
  }

  onChipClicked(chip: Chip, evt: MouseEvent) {
    this.__notify('chip-clicked', chip, evt);
  }
}
