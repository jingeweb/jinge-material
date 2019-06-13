import {
  Component,
  AFTER_RENDER,
  getFirstHtmlDOM
} from 'jinge';

export class FocusTrap extends Component {
  static get template() {
    return '<_slot/>';
  }
  constructor(attrs) {
    super(attrs);
  }
  setFocus() {
    setTimeout(() => {
      const $el = getFirstHtmlDOM(this);
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