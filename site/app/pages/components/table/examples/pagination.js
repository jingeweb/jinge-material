import {
  Component,
  VM,
  AFTER_RENDER
} from 'jinge';

import _tpl from './pagination.html';

const MOCK_TOTAL_SIZE = (Math.random() * 300 | 0) + 100;
function getUsersMockApi(page, size) {
  return new Promise(resolve => {
    setTimeout(() => {
      const start = (page - 1) * size;
      size = Math.min(MOCK_TOTAL_SIZE - start, size);
      resolve({
        total: MOCK_TOTAL_SIZE,
        list: new Array(size).fill(0).map((n, i) => ({
          name: 'jinge_' + (start + i + 1),
          age: Math.random() * 20 | 0
        }))
      });
    }, 100 + (Math.random() * 1000 | 0));
  });
}

export default class ExampleTablePagination extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);

    this.pagination = VM({
      totalSize: 0,
      loadingPage: 1,
      currentPage: 1,
      pageSize: 5
    });

    this.data = null;
  }

  [AFTER_RENDER]() {
    this.fetchUsers();
  }

  fetchUsers() {
    const pa = this.pagination;
    getUsersMockApi(pa.loadingPage, pa.pageSize).then(result => {
      this.data = VM(result.list);
      pa.totalSize = result.total;
      pa.currentPage = pa.loadingPage;
      pa.loadingPage = null;
    });
  }

  onPaginationChange(currentPage) {
    this.pagination.loadingPage = currentPage;
    this.fetchUsers();
  }
}
