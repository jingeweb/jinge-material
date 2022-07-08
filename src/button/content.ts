import { Attributes, Component } from 'jinge';
import _tpl from './content.html';

export interface ButtonContentAttrs {
  ripple?: boolean;
  rippleActive?:
    | false
    | {
        _event: Event;
      };
  disabled?: boolean;
}
export class ButtonContent extends Component {
  static template = _tpl;

  ripple?: boolean;
  rippleActive?:
    | false
    | {
        _event: Event;
      };
  disabled?: boolean;

  constructor(attrs: Attributes<ButtonContentAttrs>) {
    super(attrs);
    this.ripple = attrs.ripple;
    this.rippleActive = attrs.rippleActive;
    this.disabled = attrs.disabled;
  }

  onRippleActive(evt: MouseEvent) {
    this.__notify('update.rippleActive', evt);
  }
}
