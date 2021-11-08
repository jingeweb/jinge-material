import './card-header.scss';

import { Component } from 'jinge';

export class CardHeaderText extends Component {
  static get template() {
    return `
<div class="md-card-header-text">
  <_slot />
</div>`;
  }

  __afterRender() {
    const $pa = this.__firstDOM.parentElement;
    if ($pa && $pa.classList.contains('md-card-header')) {
      $pa.classList.add('md-card-header-flex');
    }
  }

  __beforeDestroy() {
    const $pa = this.__firstDOM.parentElement;
    if ($pa) $pa.classList.remove('md-card-header-flex');
  }
}
