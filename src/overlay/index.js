import './index.scss';

import {
  Component,
  NOTIFY
} from 'jinge';

export class Overlay extends Component {
  static get template() {
    return `
<!--
  import { Portal } from '../portal';
-->
<Portal e:__disabled="__portalDisabled">
<if e:expect="active" transition="md-overlay">
<div on:click="onClick" class="md-overlay\${fixed ? ' md-fixed' : ''}\${className ? ' ' + className : ''}"></div>
</if>
</Portal>`;
  }

  constructor(attrs) {
    super(attrs);
    this.__portalDisabled = attrs.__portalDisabled;
    this.active = attrs.active;
    this.className = attrs.class || '';
    this.fixed = attrs.fixed !== false;
  }

  onClick(evt) {
    this[NOTIFY]('click', evt);
  }
}
