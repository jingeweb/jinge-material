import './list-item-expand.scss';

import { Attributes, Component, setImmediate } from 'jinge';
import { LIST_PROVIDER } from './list';
import _tpl from './list-item-expand.html';

export interface ListItemExpandAttrs {
  ripple?: boolean;
  disabled?: boolean;
}
export class ListItemExpand extends Component {
  static template = _tpl;

  ripple?: boolean;
  disabled?: boolean;

  constructor(attrs: Attributes<ListItemExpandAttrs>) {
    super(attrs);
    this.ripple = attrs.ripple !== false;
    this.disabled = attrs.disabled;

    this.expanded = attrs.expanded;
    this._List = this.__getContext(LIST_PROVIDER);
    this._List.pushExpandable(this);
  }

  get expanded() {
    return this._expanded;
  }

  set expanded(v) {
    if (this._expanded === v) return;
    this._expanded = v;
    if (v) this.open();
    else this.close();
  }

  get showContent() {
    return this._showCnt;
  }

  set showContent(v) {
    if (this._showCnt === v) return;
    this._showCnt = v;
    this.__notify('update.expanded', v);
    setImmediate(() => {
      this.__notify(v ? 'expanded' : 'collapsed');
    });
    if (v && this._List) {
      this._List.expandATab(this);
    }
  }

  __afterRender() {
    const el = this.__getRef('item').children[0];
    this.__domAddListener(el, 'click', this._onClick);
    if (this.expanded) {
      this.open();
    }
  }

  __beforeDestroy() {
    this._List.removeExpandable(this);
    this._List = null;
  }

  _onClick() {
    this.toggleExpand();
  }

  // fetchStyle() {
  //   return new Promise(resolve => {
  //     setImmediate(() => {
  //       let fullHeight = 0;

  //       if (!this.showContent) {
  //         fullHeight = 'auto';
  //       }

  //       this.expandHeight = fullHeight;
  //       resolve();
  //     });
  //   });
  // }

  toggleExpand() {
    // this.fetchStyle().then(() => {
    this.showContent = !this.showContent;
    // });
  }

  open() {
    if (this.showContent) {
      return false;
    }

    // this.fetchStyle().then(() => {
    this.showContent = true;
    // });
  }

  close() {
    if (!this.showContent) {
      return false;
    }

    // this.fetchStyle().then(() => {
    this.showContent = false;
    // });
  }
}
