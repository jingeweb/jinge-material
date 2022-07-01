import { Component, isFunction, __, createFragment, createElementWithoutAttrs, Attributes } from 'jinge';
import { Field, FIELD_PROVIDER } from '../field';
import { SELECT_PROVIDER, HELPER_MODE, Select } from './select';
import { Optgroup, OPTGROUP_PROVIDER } from './optgroup';
import _tpl from './option.html';

export interface OptionAttrs {
  value?: unknown;
  disabled?: boolean;
}
export class Option extends Component {
  static template = _tpl;

  isSelected: boolean;
  value: unknown;
  disabled: boolean;
  _isHelper: boolean;
  _hasSlot: boolean;
  Select: Select;
  Group: Optgroup;
  _Field: Field;

  constructor(attrs: Attributes<OptionAttrs>) {
    super(attrs);
    this.value = attrs.value;
    this.disabled = attrs.disabled;
    this.isSelected = false;

    this._isHelper = this.__getContext(HELPER_MODE) as boolean;
    this._hasSlot = false;

    this._Field = this.__getContext(FIELD_PROVIDER) as Field;
    this.Select = this.__getContext(SELECT_PROVIDER) as Select;
    this.Group = this.__getContext(OPTGROUP_PROVIDER) as Optgroup;
    this.Select._add(this, this._isHelper);
    // don't forget to call parent's _updateFieldClass
    this._Field._updateFieldClass();
  }

  __render(): Node[] {
    if (!this._isHelper) {
      return super.__render();
    }
    const el = createElementWithoutAttrs('span');
    const ac = this[__].slots;
    if (ac && isFunction(ac.default)) {
      this._hasSlot = true;
      const els = ac.default(this);
      el.appendChild(els.length > 1 ? createFragment(els) : els[0]);
    }
    this[__].rootNodes.push(el);
    return this[__].rootNodes as Node[];
  }

  __beforeDestroy() {
    this.Select._remove(this, this._isHelper);
    this.Select = null;
    this._Field = null;
  }

  onCheck(isChecked: boolean) {
    if (this.disabled || this.Group?.disabled) {
      return;
    }
    this.Select._toggleChecked(this, isChecked);
  }

  stop(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  onClick(evt: MouseEvent) {
    evt.preventDefault(); // prevent input losing focus
    if (this.disabled || this.Group?.disabled) {
      return;
    }
    if (this.Select.multiple) {
      this.Select._toggleChecked(this, !this.isSelected);
    } else {
      this.Select._toggleSelected(this);
    }
  }

  getText() {
    if (this._isHelper) {
      return this._hasSlot ? (this[__].rootNodes[0] as HTMLElement).textContent : (this.value as string);
    } else {
      return (this.__getRef('text') as HTMLElement).textContent;
    }
  }
}
