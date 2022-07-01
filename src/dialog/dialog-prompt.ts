import { Attributes, Component } from 'jinge';
import { LocaleDict } from '../_locales/common';
import { getAndWatchLocale } from '../_config';
import { showConfirmOrPrompt } from './dialog-confirm';

import _tpl from './dialog-prompt.html';

export interface DialogPromptAttrs {
  title: string;
  active?: boolean;
  content?: string;
  confirmText?: string;
  cancelText?: string;
  errorTip?: string;
  inputPlaceholder?: string;
  inputRequired?: boolean;
  inputMaxlength?: number;
  confirmSpinner?: boolean;
  defaultValue?: unknown;
}
export class DialogPrompt extends Component {
  static template = _tpl;

  /**
   *
   * @param {Object} opts
   * @param {Function} confirmCallback
   * @param {Function} cancelCallback
   *
   * DialogPrompt.show 可以通过第二个和第三个参数传递 Confirm 和 Cancel 回调函数。
   *
   * 在实际业务使用时，有一种常见情况是，在 confirm 回调中要调用服务器的
   * api 接口更新，api 请求成功后，才关闭 DialogPrompt 对话框（如果失败，则
   * 允许用户重试），api 请求过程中 Confirm 按钮不能点击且有 spinner 状态。
   *
   * 针对这种情况，confirmCallback 允许返回 `false` 来阻止对话框关闭；
   * 或者返回一个字符串来阻止对话框关闭的同时展示错误信息；
   * 还允许直接返回一个 Promise 对象，对话框会等待该 Promise，直到其 resolve 返回的数据
   * 不是 `false` 或字符串才关闭对话框。
   *
   * 如果需要关闭对话框，只要直接 return 或 resolve() 即可（会返回 undefined）。
   */
  static show(
    opts: string | Exclude<DialogPromptAttrs, 'active'>,
    confirmCallback: (value: string) => undefined | boolean | string | Promise<boolean | string | undefined>,
    cancelCallback: () => undefined | boolean,
  ) {
    return showConfirmOrPrompt(DialogPrompt, opts, confirmCallback, cancelCallback);
  }

  title: string;
  active: boolean;
  content?: string;
  confirmText?: string;
  cancelText?: string;
  errorTip?: string;
  inputPlaceholder?: string;
  inputRequired?: boolean;
  inputMaxlength?: number;
  inputValue?: unknown;
  confirmSpinner?: boolean;
  requiredTip: string;
  _localeChangeHandler: () => void;
  locale: LocaleDict;

  constructor(attrs: Attributes<DialogPromptAttrs>) {
    super(attrs);
    this.active = attrs.active;
    this.title = attrs.title;
    this.errorTip = attrs.errorTip;
    this.inputValue = attrs.defaultValue;
    this.inputPlaceholder = attrs.inputPlaceholder;
    this.inputMaxlength = attrs.inputMaxlength;
    this.inputRequired = !!attrs.inputRequired;
    this.confirmSpinner = attrs.confirmSpinner;
    this.confirmText = attrs.confirmText;
    this.cancelText = attrs.cancelText;

    this.requiredTip = null;
    this._localeChangeHandler = this._onLocaleChange.bind(this);
    this.locale = getAndWatchLocale(this._localeChangeHandler);
  }

  _onLocaleChange(locale: LocaleDict) {
    this.locale = locale;
  }

  passActive(active: boolean, action: string) {
    this.__notify('update.active', active, action);
  }

  onCancel() {
    this.__notify('cancel');
  }

  onConfirm() {
    this.__notify('confirm', this.inputValue);
  }

  onInputChange(value: unknown) {
    this.inputValue = value;
    this.requiredTip = this.inputRequired && !value ? '输入不能为空！' : null;
    this.errorTip = null;
    this.__notify('change', this.inputValue);
  }

  onInputKeydown($evt: KeyboardEvent) {
    if ($evt.key === 'Enter') {
      this.onConfirm();
    }
  }
}
