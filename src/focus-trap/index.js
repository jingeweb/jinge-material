import {
  Component,
  AFTER_RENDER,
  GET_FIRST_DOM
} from 'jinge';

export class FocusTrap extends Component {
  static get template() {
    return '<_slot/>';
  }

  setFocus() {
    setTimeout(() => {
      const $el = this[GET_FIRST_DOM]();
      if ($el.tagName) {
        $el.setAttribute('tabindex', '-1');
        $el.focus();
      }
    }, 20);
  }

  [AFTER_RENDER]() {
    this.setFocus();
  }
}
