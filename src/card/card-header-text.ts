import { Component } from 'jinge';
import _tpl from './card-header-text.html';

export class CardHeaderText extends Component {
  static template = _tpl;

  __afterRender() {
    const $pa = this.__firstDOM.parentElement as HTMLElement;
    if ($pa?.classList.contains('md-card-header')) {
      $pa.classList.add('md-card-header-flex');
    }
  }

  __beforeDestroy() {
    const $pa = this.__firstDOM.parentElement;
    if ($pa) $pa.classList.remove('md-card-header-flex');
  }
}
