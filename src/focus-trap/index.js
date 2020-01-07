import {
  Component
} from 'jinge';

export class FocusTrap extends Component {
  static get template() {
    return '<_slot/>';
  }

  setFocus() {
    setTimeout(() => {
      const $el = this.__firstDOM;
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
