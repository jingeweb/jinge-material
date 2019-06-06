import './index.global.scss';

import {
  Component,
  AFTER_RENDER,
  UPDATE_IF_NEED,
  UPDATE
} from 'jinge';

const svgCacheStore = new Map();

export class SvgLoader extends Component {
  static get template() {
    return '<i class="md-svg-loader"><bind-html e:content="html"/></i>';
  }
  constructor(attrs) {
    super(attrs);
    this.src = attrs.src;
  }
  get src() {
    return this.__src;
  }
  set src(v) {
    if (this.__src === v) return;
    this.__src = v;
    this[UPDATE_IF_NEED]();
  }
  [UPDATE]() {
    this.loadSvg();
  }
  [AFTER_RENDER]() {
    this.loadSvg();
  }
  loadSvg() {
    if (!this.src) {
      throw new Error('<md-svg-loader> require "src" attribute.');
    }
    if (!svgCacheStore.has(this.src)) {
      window.fetch(this.src).then(res => res.text()).then(html => {
        svgCacheStore.set(this.src, html);
        this.html = html;
      }).catch(err => {
        console.error('<md-svg-loader> load failed:', this.src);
        console.error(err);
      });
    } else {
      this.html = svgCacheStore.get(this.src);
    }
  }
}