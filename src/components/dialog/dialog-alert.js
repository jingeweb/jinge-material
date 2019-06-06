import {
  Component,
  NOTIFY,
  _t,
  wrapAttrs,
  setImmediate,
  ON,
  isFunction
} from 'jinge';

import {
  RENDER_TO_DOM,
  DESTROY
} from 'jinge/core/component';

export class DialogAlert extends Component {
  static get template() {
    return `
<!--
  import { Dialog } from './dialog';
  import { DialogTitle } from './dialog-title';
  import { DialogContent } from './dialog-content';
  import { DialogActions } from './dialog-actions';
  import { Button } from '../button';
-->
<Dialog on:update.active="passActive" e:__portalDisabled="__portalDisabled" e:fullscreen="false" e:active="active">
  <if e:expect="title">
  <DialogTitle>\${ title }</DialogTitle>
  </if>
  <if e:expect="content">
  <DialogContent><bind-html e:content="content"/></DialogContent>
  </if>
  <DialogActions>
    <Button
     class="md-primary"
     on:click="onClick"
    >
     \${ confirmText }
    </Button>
  </DialogActions>
</Dialog>`;
  }
  static show(opts, closeCallback) {
    const el = new DialogAlert(wrapAttrs(Object.assign({
      __portalDisabled: true,
      active: false,
    }, opts)));
    el[ON]('update.active', active => {
      if (active) return;
      if (isFunction(closeCallback) && closeCallback() === false) {
        return;
      }
      el[DESTROY]();
    });
    el[RENDER_TO_DOM](document.body, false);
    setImmediate(() => {
      el.active = true;
    });
  }
  constructor(attrs) {
    super(attrs);
    this.__portalDisabled = attrs.__portalDisabled;
    this.active = attrs.active;
    this.title = attrs.title;
    this.content = attrs.content;
    this.confirmText = attrs.confirmText || _t('Ok');
  }
  onClick() {
    this[NOTIFY]('update.active', false, 'confirm');
  }
  passActive(active, action) {
    this[NOTIFY]('update.active', active, action);
  }
}