import { Component } from 'jinge';

import _tpl from './index.html';

export class FocusTrap extends Component {
  static template = _tpl;

  setFocus() {
    setTimeout(() => {
      const $el = this.__firstDOM as HTMLElement;
      if ($el.tagName) {
        $el.setAttribute('tabindex', '-1');
        $el.focus();
      }
    }, 20);
  }

  __afterRender() {
    this.setFocus();
  }
}
