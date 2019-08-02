import {
  Component
} from 'jinge';

import _sty from './home-icon-circle.scss';

export class HomeIconCircle extends Component {
  static get template() {
    return `
<!-- import { HomeIcon } from './home-icon.js' -->
<HomeIcon class="home-icon-circle">
  <div class="circle">
    <md-ripple centered />
  </div>

  <div class="circle"></div>
  <div class="circle"></div>
</HomeIcon>`;
  }

  static get style() {
    return _sty;
  }
}
