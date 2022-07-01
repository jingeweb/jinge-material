import { Component } from 'jinge';
import _tpl from './list-item-default.html';

export class ListItemDefault extends Component {
  static template = _tpl;

  toggleControl(evt: MouseEvent) {
    const $el = this.__firstDOM as HTMLElement;
    const control = $el.querySelector(
      '.md-checkbox-container, .md-switch-container, .md-radio-container',
    ) as HTMLElement;
    if (control && !control.contains(evt.target as HTMLElement)) {
      control.click();
    }
  }
}
