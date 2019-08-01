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
<Portal e:__disabled="__portalDisabled" e:__target="__portalTarget">
<if e:expect="active" transition="md-overlay">
<div on:click="onClick" class="md-overlay\${fixed ? ' md-fixed' : ''}\${className ? ' ' + className : ''}"></div>
</if>
</Portal>`;
  }

  constructor(attrs) {
    super(attrs);
    this.__portalDisabled = attrs.__portalDisabled;
    this.__portalTarget = attrs.__portalTarget;
    this.active = attrs.active;
    this.fixed = attrs.fixed;
    this.className = attrs.class || '';
  }

  onClick(evt) {
    this[NOTIFY]('click', evt);
  }
}
