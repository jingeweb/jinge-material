import './card-expand-content.scss';

import { Component, setImmediate, watch, unwatch, Attributes } from 'jinge';

import { MutationObserveDOM } from '../_util';
import { CardWrapper, CARD_PROVIDER } from './card';
import _tpl from './card-expand-content.html';

export class CardExpandContent extends Component {
  static template = _tpl;

  marginTop: number;
  transitionEnabled: boolean;
  card: CardWrapper;
  _rod: () => void;
  _eh: () => void;

  constructor(attrs: Attributes) {
    super(attrs);
    this.marginTop = 0;
    this.transitionEnabled = true;
    this.card = this.__getContext(CARD_PROVIDER);
    this._rod = null; // resize observer deregister
    this._eh = this._onExpand.bind(this);
  }

  _onExpand() {
    this.calculateMarginTop(this.__firstDOM as HTMLElement);
  }

  calculateMarginTop($el: HTMLElement) {
    if (!this.card.expand) {
      this.marginTop = ($el.children[0] as HTMLElement).offsetHeight;
    } else {
      this.marginTop = 0;
    }
  }

  calculateMarginTopImmediately($el: HTMLElement) {
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
    const $el = this.__firstDOM as HTMLElement;
    this.calculateMarginTopImmediately($el);
    this._rod = MutationObserveDOM(
      $el,
      {
        childList: true,
        characterData: true,
        subtree: true,
      },
      () => {
        this.calculateMarginTopImmediately($el);
      },
    );
    watch(this.card, 'expand', this._eh);
  }

  __beforeDestroy() {
    unwatch(this.card, 'expand', this._eh);
    this._rod?.();
  }
}
