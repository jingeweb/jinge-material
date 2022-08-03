import { Attributes, Component } from 'jinge';

import { getBaseHref } from '../_util';
import _tpl from './index.html';

const svgCacheStore = new Map();
const BASE_HREF = getBaseHref();

export interface IconAttrs {
  size?: number | string;
  cache?: boolean;
  src?: string;
}
export class Icon extends Component {
  static template = _tpl;

  cache: boolean;
  _src: string;
  size: number | string;

  constructor(attrs: Attributes<IconAttrs>) {
    super(attrs);
    this.cache = attrs.cache !== false;
    this.src = attrs.src;
    this.size = attrs.size;
  }

  get src() {
    return this._src;
  }

  set src(v) {
    if (this._src === v) return;
    this._src = v;
    this.__updateIfNeed(this._loadSvg);
  }

  _loadSvg() {
    if (!this.src) return;
    if (!svgCacheStore.has(this.src)) {
      window
        .fetch(this.src.startsWith('/') ? `${BASE_HREF}${this.src.substring(1)}` : this.src)
        .then((res) => res.text())
        .then((html) => {
          this.cache && svgCacheStore.set(this.src, html);
          this._renderSvg(html);
          this.__notify('loaded');
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('<md-icon/> load svg failed:', this.src, err);
          this.__notify('loaded', err);
        });
    } else {
      this._renderSvg(svgCacheStore.get(this.src));
    }
  }

  _renderSvg(svg: string) {
    (this.__firstDOM as HTMLElement).innerHTML = svg;
  }

  __afterRender() {
    if (this.src) {
      this._loadSvg();
    }
    this.__domPassListeners();
  }
}
