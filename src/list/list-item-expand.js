import {
  Component,
  NOTIFY,
  setImmediate,
  AFTER_RENDER,
  BEFORE_DESTROY
} from 'jinge';

export class ListItemExpand extends Component {
  static get template() {
    return `
<!--
  import { ListItemContent } from './list-item-content.js';
  import { ArrowDownIcon } from '../_icons/arrow-down.js';
-->

<div class="md-list-item-expand\${className ? ' ' + className : ''}\${showContent ? ' md-active' : ''}">
  <ListItemContent
    e:disabled="disabled || !ripple"
  >
    <_slot slot-use:default />

    <ArrowDownIcon class="md-list-expand-icon" />
  </ListItemContent>

  <div class="md-list-expand" ref:expand :style="expandStyles">
    <_slot slot-use:expand />
  </div>
</div>
`;
  }

  constructor(attrs) {
    super(attrs);
    this.ripple = attrs.ripple;
    this.disabled = attrs.disabled;
    this.className = attrs.class;

    this.expanded = attrs.expanded;
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
    this[NOTIFY]('update.expanded', v);
    setImmediate(() => {
      this[NOTIFY](v ? 'expanded' : 'collapsed');
    });
    if (v) {
      this.List.expandATab(this);
    }
  }

  [AFTER_RENDER]() {
    if (this.expanded) {
      this.open();
    }
  }

  [BEFORE_DESTROY]() {
    this.List.removeExpandable(this);
  }

  getChildrenSize() {
    const expandEl = this.$refs.listExpand;
    let size = 0;

    Array.from(expandEl.children).forEach(child => {
      size += child.offsetHeight;
    });

    return size;
  }

  fetchStyle() {
    return new Promise(resolve => {
      setImmediate(() => {
        let fullHeight = 0;

        if (!this.showContent) {
          fullHeight = 'auto'; // this.getChildrenSize() + 'px'
        }

        this.expandStyles = { height: fullHeight };
        resolve();
      });
    });
  }

  toggleExpand() {
    this.fetchStyle().then(() => {
      this.showContent = !this.showContent;
    });
  }

  open() {
    if (this.showContent) {
      return false;
    }

    this.fetchStyle().then(() => {
      this.showContent = true;
    });
  }

  close() {
    if (!this.showContent) {
      return false;
    }

    this.fetchStyle().then(() => {
      this.showContent = false;
    });
  }
}
