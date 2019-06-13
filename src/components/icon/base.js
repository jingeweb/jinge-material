import {
  Component,
  AFTER_RENDER,
  ROOT_NODES,
  UPDATE_IF_NEED,
  NOTIFY,
  isNumber,
  isString
} from 'jinge';

const svgCacheStore = new Map();
const NUM_REGEXP = /^\d+$/;
function _size(v) {
  if (isNumber(v) || (isString(v) && NUM_REGEXP.test(v))) {
    return v + 'px'; 
  } else {
    return v;
  }
}

export class Icon extends Component {
  static get template() {
    return `
<i
  class="md-icon\${className}"
  e:style="style"
/>`;
  }
  constructor(attrs) {
    super(attrs);
    this.cache = attrs.cache !== false;
    this.src = attrs.src;
    this.className = attrs.class ? ' ' + attrs.class : '';
    this.style = (attrs.style ? `${attrs.style};` : '') + (attrs.size ? `width:${_size(attrs.size)};height:${_size(attrs.size)}` : '');
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
  }
}