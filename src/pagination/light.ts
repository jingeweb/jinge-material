import { Attributes, Component, vm } from 'jinge';
import { LocaleDict } from '../_locales/common';
import { getAndWatchLocale } from '../_config';
import { _n, DEFAULT_PAGE_SIZE_OPTIONS } from './helper';

import _tpl from './light.html';

export interface LightPaginationAttrs {
  cursors: unknown[];
  disabled?: boolean;
  loading?: boolean;
  pageSize: number;
  pageSizeOptions?: boolean | unknown[];
  currentCursor?: string;
  nextCursor?: string;
  hideSinglePage?: boolean;
}
/**
 * Lightweight pagination only support first/previous/next actions.
 */
export class LightPagination extends Component {
  static template = _tpl;

  cursors: unknown[];
  disabled?: boolean;
  loading?: boolean;
  _ps: number;
  _pso: boolean | unknown[];
  currentCursor?: string;
  nextCursor?: string;
  hideSinglePage?: boolean;
  _lch: () => void;
  locale: LocaleDict;

  constructor(attrs: Attributes<LightPaginationAttrs>) {
    super(attrs);

    this.cursors = attrs.cursors || vm([]);
    this.disabled = attrs.disabled || attrs.loading;
    this.loading = attrs.loading;
    this.pageSize = attrs.pageSize;
    this.pageSizeOptions = attrs.pageSizeOptions;
    this.currentCursor = attrs.currentCursor || null;
    this.nextCursor = attrs.nextCursor || null;
    this.hideSinglePage = attrs.hideSinglePage;

    this._lch = this._onLocaleChanged.bind(this);
    this.locale = getAndWatchLocale(this._lch);
  }

  get pageSize() {
    return this._ps;
  }

  set pageSize(v) {
    v = _n(v, 10);
    if (this._ps === v) return;
    this._ps = v;
  }

  get pageSizeOptions() {
    return this._pso;
  }

  set pageSizeOptions(v) {
    if (v === true) {
      v = DEFAULT_PAGE_SIZE_OPTIONS;
    }
    if (this._pso === v) {
      return;
    }
    this._pso = v;
  }

  _onLocaleChanged(locale: LocaleDict) {
    this.locale = locale;
  }

  first() {
    this.cursors.length = 0;
    return this._change(null);
  }

  next() {
    return this._change(this.cursors[this.cursors.length - 1]);
  }

  prev() {
    const cs = this.cursors;
    cs.pop();
    cs.pop();
    this._change(cs.length > 0 ? cs[cs.length - 1] : null);
  }

  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.cursors.length = 0;
    this._change(null);
  }

  _change(cursor: unknown) {
    this.__notify('change', cursor, this.pageSize);
  }
}
