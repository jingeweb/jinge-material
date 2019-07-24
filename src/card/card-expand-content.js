
import './card-expand-content.scss';

import {
  Component,
  GET_CONTEXT,
  AFTER_RENDER,
  setImmediate,
  GET_FIRST_DOM,
  BEFORE_DESTROY,
  vmWatch,
  vmUnwatch
} from 'jinge';

import {
  CARD_PROVIDER
} from './card';
import {
  MutationObserveDOM
} from '../_util';

export class CardExpandContent extends Component {
  static get template() {
    return `
<div
  class="md-card-expand-content"
  style="margin-top: -\${marginTop}px;opacity: \${marginTop === 0 ? 1 : 0};transition-property: \${transitionEnabled ? 'inherit' : 'none'}"
>
  <_slot />
</div>`;
  }
  constructor(attrs) {
    super(attrs);
    this.marginTop = 0;
    this.transitionEnabled = true;
    this.card = this[GET_CONTEXT](CARD_PROVIDER);
    this._resizeObserver = null;
    this._eh = this._onExpand.bind(this);
  }
  _onExpand() {
    this.calculateMarginTop(
      this[GET_FIRST_DOM]()
    );
  }
  calculateMarginTop($el) {
    if (!this.card.expand) {
      this.marginTop = $el.children[0].offsetHeight;
    } else {
      this.marginTop = 0;
    }
  }
  calculateMarginTopImmediately($el) {
    if (this.card.expand) {
      return;
    }

    this.transitionEnabled = false;
    setImmediate(() => {
      this.calculateMarginTop($el);
      setImmediate(() => {
        // force reflow by calling offsetHeight getter
        $el.offsetHeight;
        this.transitionEnabled = true;
      });
    });
  }
  [AFTER_RENDER]() {
    const $el = this[GET_FIRST_DOM]();
    this.calculateMarginTopImmediately($el);
    this._resizeObserver = MutationObserveDOM($el, {
      childList: true,
      characterData: true,
      subtree: true
    }, () => {
      this.calculateMarginTopImmediately($el);
    });
    vmWatch(this.card, 'expand', this._eh);
  }
  [BEFORE_DESTROY]() {
    vmUnwatch(this.card, 'expand', this._eh);
    this._resizeObserver && this._resizeObserver.disconnect();
  }
}