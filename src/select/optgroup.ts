import { Attributes, Component } from 'jinge';
import _tpl from './optgroup.html';

export const OPTGROUP_PROVIDER = Symbol('optgroup_provider');

export interface OptgroupAttrs {
  label: string;
  disabled?: boolean;
}
export class Optgroup extends Component {
  static template = _tpl;

  label: string;
  disabled: boolean;
  constructor(attrs: Attributes<OptgroupAttrs>) {
    super(attrs);
    this.label = attrs.label;
    this.disabled = attrs.disabled;
    this.__setContext(OPTGROUP_PROVIDER, this);
  }

  stop(evt: MouseEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}
