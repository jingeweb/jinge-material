import './index.scss';

import { Attributes, uid } from 'jinge';
import { BaseField, BaseFieldAttrs } from '../field/base';

import _tpl from './index.html';

export interface FileAttrs {
  multiple: boolean;
  accept: string;
}

//! @jinge-component-parse 继承的 BaseField 无法被编译器识别，强制标记需要 parse。
export class File extends BaseField {
  static template = _tpl;

  multiple: boolean;
  accept: string;

  constructor(attrs: Attributes<FileAttrs & BaseFieldAttrs>) {
    super(attrs, 'md-input');
    this.id = attrs.id || `md-file-${uid()}`;
    this.multiple = attrs.multiple;
    this.accept = attrs.accept;
    // don't forget to call parent's _updateFieldClass
    this.Field.hasFile = true;
    this.Field._updateFieldClass();
  }

  __afterRender() {
    this.__domPassListeners(['change']);
    super.__afterRender();
  }

  getMultipleName(files: FileList) {
    const names: string[] = [];
    [...files].forEach((f) => names.push(f.name));
    return names.join(', ');
  }

  getFileName(files: FileList, target: HTMLInputElement) {
    if (!files || files.length === 0) {
      return target.value.split('\\').pop();
    }
    if (files.length > 1) {
      return this.getMultipleName(files);
    }
    if (files.length === 1) {
      return files[0].name;
    }
    return null;
  }

  openPicker() {
    this.onFocus();
    (this.__getRef('file') as HTMLElement).click();
  }

  onChange($event: InputEvent) {
    this.onFileSelected($event);
  }

  onFileSelected(evt: InputEvent) {
    const { target, dataTransfer } = evt;
    const files = (target as HTMLInputElement).files || dataTransfer.files;

    this.value = this.getFileName(files, target as HTMLInputElement);
    this.__notify('change', this.value, files || (target as HTMLInputElement).value);
  }
}
