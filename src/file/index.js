import './index.scss';

import { uid } from 'jinge';
import { BaseField } from '../field/base';

import _tpl from './index.html';

export class File extends BaseField {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
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

  getMultipleName(files) {
    const names = [];
    [...files].forEach((f) => names.push(f.name));
    return names.join(', ');
  }

  getFileName(files, target) {
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
    this.__getRef('file').click();
  }

  onChange($event) {
    this.onFileSelected($event);
  }

  onFileSelected(evt) {
    const { target, dataTransfer } = evt;
    const files = target.files || dataTransfer.files;

    this.value = this.getFileName(files, target);
    this.__notify('change', this.value, files || target.value);
  }
}
