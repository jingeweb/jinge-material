import { Component, vm, compile } from 'jinge';
import { getAndWatchLocale } from '../_config';
import { _n, DEFAULT_PAGE_SIZE_OPTIONS } from './helper';

import _tpl from './full.html';

export class Pagination extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);

    this.items = null;
    this.totalInfo = '';
    this.jumperPage = '';
    this._localeChangedHandler = this._onLocaleChanged.bind(this);
    this.locale = getAndWatchLocale(this._localeChangedHandler);

    this.pageSizeOptions = attrs.pageSizeOptions;
    this.pageSize = attrs.pageSize;
    this.totalSize = attrs.totalSize;
    this.currentPage = attrs.currentPage;
    this.loadingPage = _n(attrs.loadingPage, 0);
    this.itemCount = attrs.itemCount;
    this.useJumper = attrs.useJumper;
    this.showTotal = attrs.showTotal;
    this.disabled = attrs.disabled;
    this.className = attrs.class;
    this.hideSinglePage = attrs.hideSinglePage;

    this._updateTotalInfo();
    this._updatePageItems(); // calc page items
  }

  _onLocaleChanged(locale) {
    this.locale = locale;
    this._updateTotalInfo();
  }

  _updateTotalInfo() {
    this.totalInfo = compile(this.locale.totalCount)({
      count: this.totalSize,
    });
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

  get totalSize() {
    return this._totalSize;
  }

  set totalSize(v) {
    v = _n(v, 0);
    if (this._totalSize === v) return;
    this._totalSize = v;
    this.__updateIfNeed(this._updatePageItems);
  }

  get pageSize() {
    return this._pageSize;
  }

  set pageSize(v) {
    v = _n(v, 10);
    if (this._pageSize === v) return;
    this._pageSize = v;
    this.__updateIfNeed(this._updatePageItems);
  }

  get currentPage() {
    return this._currentPage;
  }

  set currentPage(v) {
    v = _n(v, 1);
    if (this._currentPage === v) return;
    this._currentPage = v;
    this.__updateIfNeed(this._updatePageItems);
  }

  get itemCount() {
    return this._itemCount;
  }

  set itemCount(v) {
    v = _n(v, 7);
    if (this._itemCount === v) return;
    this._itemCount = v;
    this.__updateIfNeed(this._updatePageItems);
  }

  first() {
    if (this.disabled || this.loadingPage > 0 || this.currentPage === 1) {
      return;
    }
    return this._changePage(1);
  }

  last() {
    if (this.disabled || this.loadingPage > 0 || this.currentPage >= this.totalPage) {
      return;
    }
    return this._changePage(this.totalPage);
  }

  next() {
    if (this.disabled || this.loadingPage > 0 || this.currentPage >= this.totalPage) {
      return;
    }
    return this._changePage(this.currentPage + 1);
  }

  nextP() {
    if (this.disabled || this.loadingPage > 0) {
      return;
    }
    return this._changePage(this.currentPage + (this.itemCount - 2));
  }

  jump(pageIndex) {
    if (
      this.disabled ||
      this.loadingPage > 0 ||
      pageIndex === this.currentPage ||
      pageIndex < 1 ||
      pageIndex > this.totalPage
    ) {
      return;
    }
    return this._changePage(pageIndex);
  }

  prev() {
    if (this.disabled || this.loadingPage > 0 || this.currentPage <= 1) {
      return;
    }
    this._changePage(this.currentPage - 1);
  }

  prevP() {
    if (this.disabled || this.loadingPage > 0) {
      return;
    }
    return this._changePage(this.currentPage - (this.itemCount - 2));
  }

  _changePage(page) {
    if (page <= 0) {
      page = 1;
    } else if (page > this.totalPage) {
      page = this.totalPage;
    }
    if (page === this.currentPage) {
      return;
    }
    this.currentPage = page;
    this.__notify('change', this.currentPage, this.pageSize);
  }

  onPageSizeChange(size) {
    this.totalPage = Math.ceil(this.totalSize / size);
    if (this.currentPage > this.totalPage) {
      this.currentPage = this.totalPage;
    }
    this.pageSize = size;
    this.__notify('change', this.currentPage, this.pageSize);
  }

  _updatePageItems() {
    this.totalPage = Math.ceil(this.totalSize / this.pageSize);

    const tp = this.totalPage;
    const ic = this.itemCount;
    let cp = this._currentPage;

    if (cp > tp) {
      cp = this._currentPage = tp > 1 ? tp : 1;
    }

    const halfIc = (ic / 2) | 0;
    const left = cp - 1;
    const right = tp - cp;
    let start = 0;
    let end = 0;
    if (left <= right && left < halfIc) {
      start = 2;
      end = Math.min(ic, tp) - 1;
    } else if (left > right && right < halfIc) {
      end = tp - 1;
      start = Math.max(tp - ic + 1, 1) + 1;
    } else {
      start = cp - halfIc + 1;
      end = cp + halfIc - 1;
    }

    const items = [];
    for (let i = start; i <= end; i++) {
      items.push(i);
    }

    this.items = vm(items);
  }

  onJumperKeydown($event) {
    if ($event.keyCode === 13) {
      this.onJumperBlur();
    }
  }

  onJumperBlur() {
    const jp = this.jumperPage;
    this.jumperPage = '';
    if (!jp || !/^\d+$/.test(jp)) {
      return;
    }
    this._changePage(Number(jp));
  }
}
