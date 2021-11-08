import { Component } from 'jinge';

import _sty from './home-icon-square.scss';

export class HomeIconSquare extends Component {
  static get template() {
    return `
<!-- import { HomeIcon } from './home-icon.js' -->
<HomeIcon class="home-icon-square">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</HomeIcon>`;
  }

  static get style() {
    return _sty;
  }
}
