
import './card-expand-content.scss';

import {
  Component,
  setImmediate,
  watch, unwatch
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
    this.card = this.__getContext(CARD_PROVIDER);
    this._rod = null; // resize observer deregister
    this._eh = this._onExpand.bind(this);
  }

  _onExpand() {
    this.calculateMarginTop(
      this.__firstDOM
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
        /* eslint no-unused-expressions: "off" */
        $el.offsetHeight;
        this.transitionEnabled = true;
      });
    });
  }

  __afterRender() {
    const $el = this.__firstDOM;
    this.calculateMarginTopImmediately($el);
    this._rod = MutationObserveDOM($el, {
      childList: true,
      characterData: true,
      subtree: true
    }, () => {
      this.calculateMarginTopImmediately($el);
    });
    watch(this.card, 'expand', this._eh);
  }

  __beforeDestroy() {
    unwatch(this.card, 'expand', this._eh);
    this._rod && this._rod();
  }
}
