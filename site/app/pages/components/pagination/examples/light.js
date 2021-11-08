import { Component, vm } from 'jinge';

import _tpl from './light.html';

function mockApi(currentCursor, pageSize) {
  const idx = Number(currentCursor || '0');
  const nextCursor = idx + pageSize > 50 ? null : (idx + pageSize).toString();
  const list = new Array(pageSize).fill(0).map((n, i) => {
    return String.fromCharCode(65 + i + idx);
  });
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          nextCursor,
          list,
        }),
      2000,
    );
  });
}

export default class ExamplePaginationLight extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.loading = false;
    this.pageSize = 10;
    this.cursors = vm([]);
    this.list = null;
  }

  __afterRender() {
    this.request(null, this.pageSize);
  }

  request(cursor, pageSize) {
    this.loading = true;
    mockApi(cursor, pageSize).then((result) => {
      this.cursors.push(result.nextCursor || null);
      this.list = vm(result.list);
      this.loading = false;
    });
  }

  onPaginationChanged(cursor, pageSize) {
    this.pageSize = pageSize;
    this.request(cursor, pageSize);
  }

  reset() {
    this.cursors.length = 0;
    this.pageSize = 10;
    this.request(null, 10);
  }
}
