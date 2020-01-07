import {
  Component
} from 'jinge';

import _tpl from './template.html';
import _sty from './template.scss';

export default class ExampleTabsTemplate extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);
    this.newPosts = 0;
    this._int = null;
  }

  clearCheckPosts() {
    clearInterval(this._int);
    this._int = null;
  }

  clearNewPosts() {
    this.clearCheckPosts();
    this.newPosts = 0;
  }

  checkNewPosts(index, tab) {
    if (tab && tab.id === 'tab-posts') {
      this.clearNewPosts();
    } else if (!this._int) {
      this._int = setInterval(() => {
        if (this.newPosts === 99) {
          this.newPosts = '99+';
          this.clearCheckPosts();
        } else {
          this.newPosts++;
        }
      }, 1000);
    }
  }

  __afterRender() {
    this.checkNewPosts();
  }

  __beforeDestroy() {
    this.clearCheckPosts();
  }
}
