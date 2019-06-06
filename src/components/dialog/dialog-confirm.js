import {
  Component,
  NOTIFY,
  _t,
  wrapAttrs,
  ON,
  setImmediate,
  isFunction,
  isObject
} from 'jinge';
import {
  DESTROY,
  RENDER_TO_DOM
} from 'jinge/core/component';

export class DialogConfirm extends Component {
  static get template() {
    return `
<!--
  import { Dialog } from './dialog';
  import { DialogTitle } from './dialog-title';
  import { DialogContent } from './dialog-content';
  import { DialogActions } from './dialog-actions';
  import { Button } from '../button';
  import { Icon } from '../icon';
-->
<Dialog on:update.active="passActive" e:active="active" e:__portalDisabled="__portalDisabled" e:fullscreen="false">
  <if e:expect="title">
  <DialogTitle>\${ title }</DialogTitle>
  </if>
  <if e:expect="content">
  <DialogContent><bind-html e:content="content"/></DialogContent>
  </if>
  <DialogActions>
    <Button
     e:disabled="confirmSpinner"     
     on:click="onCancel"
    >
      \${ cancelText }
    </Button>
    <Button
     e:disabled="confirmSpinner"
     class="md-primary"
     on:click="onConfirm"
    >
      <if e:expect="confirmSpinner">
      <Icon>home</Icon>
      </if>
      \${ confirmText }
    </Button>
  </DialogActions>
</Dialog>`;
  }
  /**
   * 
   * @param {Object} opts 
   * @param {Function} confirmCallback 
   * @param {Function} cancelCallback
   * 
   * DialogConfirm.show 可以通过第二个和第三个参数传递 Confirm 和 Cancel 回调函数。
   * 
   * 在实际业务使用时，有一种常见情况是，在 confirm 回调中要调用服务器的
   * api 接口更新，api 请求成功后，才关闭 DialogConfirm 对话框（如果失败，则
   * 允许用户重试），api 请求过程中 Confirm 按钮不能点击且有 spinner 状态。
   * 
   * 针对这种情况，confirmCallback 允许返回 `false` 来阻止对话框关闭，还允许直接
   * 返回一个 Promise 对象。对话框会等待该 Promise，直到其 resolve 返回的数据
   * 不是 `false` 才关闭对话框。
   */
  static show(opts, confirmCallback, cancelCallback) {
    const el = new DialogConfirm(wrapAttrs({
      __portalDisabled: true,
      active: false,
      title: opts.title,
      content: opts.content,
      confirmSpinner: false,
      confirmText: opts.confirmText,
      cancelText: opts.cancelText
    }));
    setImmediate(() => {
      el.active = true;
    });
    el[ON]('update.active', (active, action) => {
      if (active || action === 'confirm') return;
      if (isFunction(cancelCallback) && cancelCallback() === false) {
        return;
      }
      el[DESTROY]();
    });
    el[ON]('cancel', () => {
      if (isFunction(cancelCallback) && cancelCallback() === false) {
        return;
      }
      el[DESTROY]();
    });
    el[ON]('confirm', () => {
      if (!isFunction(confirmCallback)) {
        return el[DESTROY]();
      }
      const result = confirmCallback();
      if (result === false) {
        return;
      } else if (isObject(result) && isFunction(result.then)) {
        el.confirmSpinner = true;
        result.then(rr => {
          if (rr !== false) {
            el[DESTROY]();
          } else {
            el.confirmSpinner = false;
          }
        }, () => {
          el.confirmSpinner = false;
        });
        return;
      }
      el[DESTROY]();
    });
    el[RENDER_TO_DOM](document.body, false);
  }
  constructor(attrs) {
    super(attrs);
    this.active = attrs.active;
    this.title = attrs.title;
    this.content = attrs.content;
    this.confirmSpinner = attrs.confirmSpinner;
    this.confirmText = attrs.confirmText || _t('Ok');
    this.cancelText = attrs.cancelText || _t('Cancel');
  }
  passActive(active, action) {
    this[NOTIFY]('update.active', active, action);
  }
  onCancel() {
    this[NOTIFY]('cancel');
    this[NOTIFY]('update.active', false, 'cancel');
  }
  onConfirm() {
    this[NOTIFY]('confirm');
    this[NOTIFY]('update.active', false, 'confirm');
  }
}