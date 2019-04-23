import './icon.global.scss';

import {
  Component
} from 'jinge';

export class Icon extends Component {
  static get template() {
    return `
<!-- import { SvgLoader } from '../svg-loader' -->
<if e:expect="src">
<SvgLoader slot-pass:default class="md-icon md-icon-image" e:src="src" on:loaded="notify('loaded')" />
<i class="md-icon md-icon-font" slot-pass:else>
  <_slot />
</i>
</if>
`;
  }
  constructor(attrs) {
    super(attrs);
    this.src = attrs.src;
  }
}