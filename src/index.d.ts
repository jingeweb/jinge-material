export * from './_config/index';

interface Options {
  title: string;
  content?: string;
  confirmText?: string;
  cancelText?: string;
}

type ConfirmCallback = () => void | boolean | string | Promise<void | boolean | string>;
type CancelCallback = () => void | boolean;

export declare class ConfirmDialog {
  static show(options: Options, confirmCallback?: ConfirmCallback, cancelCallback?: CancelCallback): void;
}