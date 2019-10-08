import './index.scss';

import {
  Component,
  AFTER_RENDER,
  BEFORE_DESTROY,
  ROOT_NODES,
  UPDATE_IF_NEED,
  NOTIFY,
  isNumber,
  isString
} from 'jinge';
import {
  bindDOMListeners,
  unbindDOMListeners
} from 'jinge/core/component';

const svgCacheStore = new Map();
const NUM_REGEXP = /^\d+$/;
function _size(v) {
  if (isNumber(v) || (isString(v) && NUM_REGEXP.test(v))) {
    return v + 'px';
  } else {
    return v;
  }
}
function _style(attrs) {
  let sty = attrs.style || '';
  if (attrs.size) {
    if (sty && !sty.endsWith(';')) {
      sty += ';';
    }
    sty += `font-size:${_size(attrs.size)};`;
  }
  return sty;
}

export class Icon extends Component {
  static get template() {
    return `
<i
  class="md-icon\${className ? ' ' + className : ''}"
  e:style="style"
/>`;
  }

  constructor(attrs) {
    super(attrs);
    this.cache = attrs.cache !== false;
    this.src = attrs.src;
    this.className = attrs.class;
    this.style = attrs.style || attrs.size ? _style(attrs) : undefined;
  }

  get src() {
    return this.__src;
  }

  set src(v) {
    if (this.__src === v) return;
    this.__src = v;
    this[UPDATE_IF_NEED](this._loadSvg);
  }

  get svg() {
    // abstract method
    return null;
  }

  _loadSvg() {
    if (!this.src) return;
    if (!svgCacheStore.has(this.src)) {
      window.fetch(this.src).then(res => res.text()).then(html => {
        this.cache && svgCacheStore.set(this.src, html);
        this._renderSvg(html);
        this[NOTIFY]('loaded');
      }).catch(err => {
        console.error('<md-icon/>: load svg failed:', this.src);
        console.error(err);
        this[NOTIFY]('loaded', err);
      });
    } else {
      this._renderSvg(svgCacheStore.get(this.src));
    }
  }

  _renderSvg(svg) {
    this[ROOT_NODES][0].innerHTML = svg;
  }

  [AFTER_RENDER]() {
    if (this.svg) {
      this._renderSvg(this.svg);
    } else if (this.src) {
      this._loadSvg();
    }
    bindDOMListeners(this);
  }

  [BEFORE_DESTROY]() {
    unbindDOMListeners(this);
  }
}
