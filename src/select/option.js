import {
  Component,
  GET_CONTEXT,
  GET_REF,
  BEFORE_DESTROY
} from 'jinge';
import {
  SELECT_PROVIDER
} from './select';
import {
  FIELD_PROVIDER
} from '../field';
import {
  OPTGROUP_PROVIDER
} from './optgroup';

export class Option extends Component {
  static get template() {
    return `
<md-menu-item
  e:class="isSelected ? 'md-selected' : undefined"
  e:disabled="disabled || (Group && Group.disabled)"
  on:mousedown="onClick"
>
  <if e:expect="Select.multiple">
  <md-checkbox
    on:mousedown="stop"
    e:value="isSelected"
    on:change="onCheck"
    class="md-primary"
    e:disabled="disabled"
  />  
  </if>

  <span class="md-list-item-text" ref:text>
    <_slot>\${value}</_slot>
  </span>
</md-menu-item>`;
  }

  constructor(attrs) {
    super(attrs);
    this.value = attrs.value;
    this.disabled = attrs.disabled;
    this.isSelected = false;

    this._Field = this[GET_CONTEXT](FIELD_PROVIDER);
    this.Select = this[GET_CONTEXT](SELECT_PROVIDER);
    this.Group = this[GET_CONTEXT](OPTGROUP_PROVIDER);

    this.Select._add(this);
    // don't forget to call parent's _updateFieldClass
    this._Field._updateFieldClass();
  }

  [BEFORE_DESTROY]() {
    this.Select._remove(this);
    this.Select = null;
  }

  onCheck(isChecked) {
    if (this.disabled || (this.Group && this.Group.disabled)) {
      return;
    }
    this.Select._toggleChecked(this, isChecked);
  }

  stop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  onClick(evt) {
    evt.preventDefault(); // prevent input losing focus
    if (this.disabled || (this.Group && this.Group.disabled)) {
      return;
    }
    if (this.Select.multiple) {
      this.Select._toggleChecked(this, !this.isSelected);
    } else {
      this.Select._toggleSelected(this);
    }
  }

  getText() {
    return this[GET_REF]('text').textContent;
  }
}
