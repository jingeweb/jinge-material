import { Component, vm, $$, isNumber, setImmediate, clearImmediate, Attributes, ViewModel } from 'jinge';
import { Router } from 'jinge-router';
import { MutationObserveDOM, EnumAttrValidator, ELEVATION_ENUMS } from '../_util';
import { Tab } from './tab';

import _tpl from './tabs.html';

// const elevationValidator = new EnumAttrValidator('<md-toolbar>', 'elevation', ELEVATION_ENUMS);

export const TABS_PROVIDER = Symbol('tabs_provider');

const fnIndexOf = [].indexOf;

export interface TabsAttrs {
  activeTab?: string | number;
  alignment?: 'left' | 'right' | 'center' | 'fixed';
  elevation?: string | number;
  dynamicHeight?: boolean;
}
export class Tabs extends Component {
  static template = _tpl;

  _activeTab: string | number;
  alignment: TabsAttrs['alignment'];
  // elevation: number;
  dynamicHeight: boolean;
  noTransition: boolean;
  _syncRoute: number;
  _activeEl: HTMLElement;
  _rod: () => void;
  _bed: () => void;
  _syncImm: number;
  hasContent: boolean;
  contentStyles: string;
  containerStyles: string;
  indicatorStyles: string;
  indicatorClass: string;
  items: ViewModel & Tab[];

  constructor(attrs: Attributes<TabsAttrs>) {
    // attrs.elevation = Number(attrs.elevation || 0);
    // elevationValidator.assert(attrs);
    super(attrs);
    this.activeTab = attrs.activeTab || 0;
    this.alignment = attrs.alignment || 'left';
    // this.elevation = attrs.elevation;
    this.dynamicHeight = attrs.dynamicHeight;

    this.noTransition = true;
    this._syncRoute = 0;
    this._activeEl = null;
    /**
     * resize observer deregister
     */
    this._rod = null;
    /**
     * route before each guard deregister
     */
    this._bed = null;
    this._syncImm = 0;
    this.hasContent = true;
    this.contentStyles = null;
    this.containerStyles = null;

    this.items = vm([]);
    this.__setContext(TABS_PROVIDER, this); // pass parent to children
  }

  get activeTab() {
    return this._activeTab;
  }

  set activeTab(v) {
    if (this._activeTab === v) return;
    this._activeTab = v;
    this.__updateIfNeed();
  }

  __afterRender() {
    this.hasContent = this.items.some((it) => it._hasContent);
    this.items.length > 0 && this.items[$$].__notify('length', true);

    if (this._syncRoute === 0) {
      this._update(false);
    } else {
      /**
       * @type {Router}
       */
      const router = this.__getContext('router') as Router;
      if (!router) {
        throw new Error('syncRoute attribute is true, but jinge-router not found.');
      }
      this._bed = router.afterEach(() => {
        this._syncImm = setImmediate(() => {
          this._sync();
        });
      });
      this._syncImm = setImmediate(() => {
        this._sync();
      });
    }
    setTimeout(() => {
      this.noTransition = false;
      this._setupObservers();
    }, 100);
  }

  __beforeDestroy() {
    if (this._syncImm > 0) {
      clearImmediate(this._syncImm);
    }
    if (this._syncRoute > 0) {
      this._bed();
    }
    if (this._rod) {
      this._rod();
    }
  }

  _setupObservers() {
    this._rod = MutationObserveDOM(
      (this.__firstDOM as HTMLElement).querySelector('.md-tabs-content'),
      {
        childList: true,
        characterData: true,
        subtree: true,
      },
      () => {
        this._reCalc();
      },
    );

    this.__domAddListener(window, 'resize', this._reCalc);
  }

  _sync(activeIndex?: number) {
    this._syncImm = 0;
    const $nav = this.__getRef('nav') as HTMLElement;
    const isN = isNumber(activeIndex);
    const el = $nav.querySelector(
      `.md-tab-nav-button${isN ? `:nth-child(${activeIndex + 1})` : '.md-active'}`,
    ) as HTMLElement;
    if (this._activeEl === el) {
      return;
    }
    this._activeEl = el;
    if (!isN) {
      // reset active index
      this._activeTab = el ? fnIndexOf.call($nav.children, el) : -1;
    }
    this._reCalc();
  }

  _update(notify = true) {
    if (!isNumber(this._activeTab)) {
      this._activeTab = this.items.findIndex((it) => it.id === this._activeTab);
    }
    this._activeEl = (this.__getRef('nav') as HTMLElement).querySelector('.md-tab-nav-button.md-active');
    this._setActive(this._activeTab, notify);
  }

  _add(tab: Tab) {
    if ((this._syncRoute > 0 && !tab.to) || (tab.to && this._syncRoute !== this.items.length)) {
      // eslint-disable-next-line no-console
      console.warn('<md-tabs>: if one <md-tab> has "to" attribute, all tabs must also have "to" attribute.');
    }
    if (tab.to) {
      this._syncRoute++;
    }
    this.items.push(tab);
  }

  _remove(tab: Tab) {
    const idx = this.items.indexOf(tab);
    this.items.splice(idx, 1);
  }

  _active(index: number) {
    if (this._syncRoute > 0 || this._activeTab === index) {
      return;
    }
    this._activeTab = index;
    this._setActive(index);
  }

  _setActive(index: number, notify = true) {
    if (index < 0 || index >= this.items.length) {
      return;
    }
    for (let i = 0; i < this.items.length; i++) {
      const tab = this.items[i];
      tab.isActive = i === index;
    }
    this._syncImm = setImmediate(() => this._sync(this._activeTab as number));
    notify && this.__notify('changed', index, this.items[index]);
  }

  _reCalc() {
    this._calcIndicator();
    this._calcTab();
  }

  _calcIndicator() {
    const $indicator = this.__getRef('indicator') as HTMLElement;
    if (!this._activeEl || !$indicator) {
      // console.log(this._activeEl, $indicator);
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
    const tabElement = (this.__firstDOM as HTMLElement).querySelector(
      `.md-tab:nth-child(${(this._activeTab as number) + 1})`,
    ) as HTMLElement;
    this.contentStyles = `height: ${tabElement ? `${tabElement.offsetHeight}px` : 0}`;
    this.containerStyles = `transform: translate3D(${-(this._activeTab as number) * 100}%, 0, 0)`;
  }
}
