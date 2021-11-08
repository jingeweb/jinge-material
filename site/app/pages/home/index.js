import { Component, _t } from 'jinge';

import { pageState } from '../../service';
import _tpl from './index.html';
import _sty from './index.scss';

export class PageHome extends Component {
  static get style() {
    return _sty;
  }

  static get template() {
    return _tpl;
  }

  __afterRender() {
    pageState.isSplash = true;
    pageState.title = _t('Jinge Material - 构建在 Jinge 框架上的 Material Design 组件库');
  }
}
