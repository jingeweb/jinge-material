import {
  Component,
  VM,
  Symbol,
  isNumber,
  setImmediate,
  SET_CONTEXT,
  GET_FIRST_DOM,
  UPDATE_IF_NEED,
  AFTER_RENDER,
  NOTIFY,
  GET_REF,
  GET_CONTEXT,
  BEFORE_DESTROY,
  DOM_ON,
  VM_ATTRS,
  VM_NOTIFY
} from 'jinge';
import {
  UIROUTER_CONTEXT
} from '../uisref';
import {
  MutationObserveDOM,
  EnumAttrValidator,
  ELEVATION_ENUMS
} from '../_util';

import _tpl from './tabs.html';

const elevationValidator = new EnumAttrValidator(
  '<md-toolbar>', 'elevation', ELEVATION_ENUMS
);

export const TABS_PROVIDER = Symbol('tabs_provider');

const fnIndexOf = [].indexOf;

export class Tabs extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    attrs.elevation = Number(attrs.elevation || 0);
    elevationValidator.assert(attrs);
    super(attrs);
    this.activeTab = attrs.activeTab || 0;
    this.alignment = attrs.alignment || 'left';
    this.elevation = attrs.elevation;
    this.dynamicHeight = attrs.dynamicHeight;
    this.className = attrs.class;

    this.noTransition = true;
    this._syncRoute = 0;
    this._activeEl = null;
    this._resizeOb = null;
    this.hasContent = true;
    this.contentStyles = null;
    this.containerStyles = null;

    this.items = VM([]);
    this[SET_CONTEXT](TABS_PROVIDER, this); // pass parent to children
  }

  get activeTab() {
    return this._activeTab;
  }

  set activeTab(v) {
    if (this._activeTab === v) return;
    this._activeTab = v;
    this[UPDATE_IF_NEED](this._update);
  }

  [AFTER_RENDER]() {
    this.hasContent = this.items.some(it => it._hasContent);
    this.items.length > 0 && this.items[VM_ATTRS][VM_NOTIFY]('length', true);

    if (this._syncRoute === 0) {
      this._update(false);
    } else {
      const router = this[GET_CONTEXT](UIROUTER_CONTEXT);
      if (!router) {
        throw new Error('syncRoute attribute is true, but ui-router not found.');
      }
      this._tsderegister = router.transitionService.onSuccess({}, () => {
        setImmediate(() => {
          this._sync();
        });
      });
      setImmediate(() => {
        this._sync();
      });
    }
    setTimeout(() => {
      this.noTransition = false;
      this._setupObservers();
    }, 100);
  }

  [BEFORE_DESTROY]() {
    if (this._syncRoute > 0) {
      this._tsderegister();
    }
    if (this._resizeOb) {
      this._resizeOb.disconnect();
    }
  }

  _setupObservers() {
    this._resizeOb = MutationObserveDOM(this[GET_FIRST_DOM]().querySelector('.md-tabs-content'), {
      childList: true,
      characterData: true,
      subtree: true
    }, () => {
      this._reCalc();
    });

    this[DOM_ON](window, 'resize', this._reCalc);
  }

  _sync(activeIndex) {
    const $nav = this[GET_REF]('nav');
    const isN = isNumber(activeIndex);
    const el = $nav.querySelector(`.md-tab-nav-button${isN ? `:nth-child(${activeIndex + 1})` : '.md-active'}`);
    if (this._activeEl === el) {
      return;
    }
    this._activeEl = el;
    if (!isN) { // reset active index
      this._activeTab = el ? fnIndexOf.call($nav.children, el) : -1;
    }
    this._reCalc();
  }

  _update(notify = true) {
    if (!isNumber(this._activeTab)) {
      this._activeTab = this.items.findIndex(it => it.id === this._activeStep);
    }
    this._activeEl = this[GET_REF]('nav').querySelector('.md-tab-nav-button.md-active');
    this._setActive(this._activeTab, notify);
  }

  _add(tab) {
    if ((this._syncRoute > 0 && !tab.to) || (tab.to && this._syncRoute !== this.items.length)) {
      console.warn('<md-tabs>: if one <md-tab> has "to" attribute, all tabs must also have "to" attribute.');
    }
    if (tab.to) {
      this._syncRoute++;
    }
    this.items.push(tab);
  }

  _remove(tab) {
    const idx = this.items.indexOf(tab);
    this.items.splice(idx, 1);
  }

  _active(index) {
    if (this._syncRoute > 0 || this._activeTab === index) {
      return;
    }
    this._activeTab = index;
    this._setActive(index);
  }

  _setActive(index, notify = true) {
    if (index < 0 || index >= this.items.length) {
      return;
    }
    for (let i = 0; i < this.items.length; i++) {
      const tab = this.items[i];
      tab.isActive = i === index;
    }
    setImmediate(() => this._sync(this._activeTab));
    notify && this[NOTIFY]('changed', index, this.items[index]);
  }

  _reCalc() {
    this._calcIndicator();
    this._calcTab();
  }

  _calcIndicator() {
    const $indicator = this[GET_REF]('indicator');
    if (!this._activeEl || !$indicator) {
      console.log(this._activeEl, $indicator);
      this.indicatorStyles = 'left: 100%; right: 100%';
      return;
    }
    const buttonWidth = this._activeEl.offsetWidth;
    const buttonLeft = this._activeEl.offsetLeft;
    const indicatorLeft = $indicator.offsetLeft;

    if (indicatorLeft < buttonLeft) {
      this.indicatorClass = 'md-tabs-indicator-right';
    } else {
      this.indicatorClass = 'md-tabs-indicator-left';
    }
    this.indicatorStyles = `left: ${buttonLeft}px; right: calc(100% - ${buttonWidth + buttonLeft}px);`;
  }

  _calcTab() {
    if (!this.hasContent) {
      this.contentStyles = 'height: 0';
      return;
    }
    const tabElement = this[GET_FIRST_DOM]().querySelector(`.md-tab:nth-child(${this._activeTab + 1})`);
    this.contentStyles = `height: ${tabElement ? `${tabElement.offsetHeight}px` : 0}`;
    this.containerStyles = `transform: translate3D(${-this._activeTab * 100}%, 0, 0)`;
  }
}
