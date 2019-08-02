import {
  Component
} from 'jinge';

import _sty from './home-icon-devices.scss';

export class HomeIconDevices extends Component {
  static get template() {
    return `
<!-- import { HomeIcon } from './home-icon.js' -->
<HomeIcon class="home-icon-devices">
  <div class="device"></div>
  <div class="device"></div>
  <div class="device"></div>
</HomeIcon>`;
  }

  static get style() {
    return _sty;
  }
}
