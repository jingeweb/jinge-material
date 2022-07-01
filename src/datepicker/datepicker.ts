import './datepicker.scss';

import { Attributes, Component, isNumber, isString } from 'jinge';
import {
  isEqual as isDateEqual,
  isValid as isDateValid,
  format as formatDate,
  parse as parseDate,
  formatToReStr as dateFormatToRegExpStr,
} from '../_util/date';
import { getAndWatchLocale, unwatchLocale } from '../_config';

import { LocaleDict } from '../_locales/common';
import { Input } from '../input';
import _tpl from './datepicker.html';

const NUM_REG = /^\d+$/;
const NOT_VALID = '<md-datepicker>: value is not a valid date. use Date.now() instead.';

export interface DatepickerAttrs {
  immediately?: boolean;
  disabled?: boolean;
  placeholder?: string;
  overrideNative?: boolean;
  closeOnSelect?: boolean;
  openOnFocus?: boolean;
  showDefaultPlaceholder?: boolean;
  inputDebounce?: number;
  disabledDates?: (year: number, month: number, day: number, week: number) => boolean;
  dateFormat?: string;
  value?: number | string | Date;
}
export class Datepicker extends Component {
  static template = _tpl;

  immediately?: boolean;
  disabled?: boolean;
  placeholder?: string;
  overrideNative?: boolean;
  closeOnSelect?: boolean;
  openOnFocus?: boolean;
  showDefaultPlaceholder?: boolean;
  inputDebounce?: number;
  disabledDates?: DatepickerAttrs['disabledDates'];
  _dateFormat?: string;
  _value: Date;
  locale: LocaleDict;
  _localeChangedHandler: () => void;
  pattern: string;
  inputDate: string;
  showDialog: boolean;
  _iptChangeTM: number;
  inputDateFormat: string;

  constructor(attrs: Attributes<DatepickerAttrs>) {
    super(attrs);

    this._localeChangedHandler = this._onLocaleChanged.bind(this);
    this.locale = getAndWatchLocale(this._localeChangedHandler);
    this.pattern = '';
    this.inputDate = '';
    this.showDialog = false;
    this._iptChangeTM = null;

    this.value = attrs.value;
    this.immediately = attrs.immediately;
    this.disabled = attrs.disabled;
    this.placeholder = attrs.placeholder;
    this.overrideNative = attrs.overrideNative !== false;
    this.closeOnSelect = attrs.closeOnSelect;
    this.openOnFocus = attrs.openOnFocus !== false;
    this.showDefaultPlaceholder = attrs.showDefaultPlaceholder !== false;
    this.inputDebounce = Number(attrs.inputDebounce || 1000);
    this.disabledDates = attrs.disabledDates;
    this.inputDateFormat = attrs.dateFormat;
    this.dateFormat = attrs.dateFormat || this.locale.dateFormat;
  }

  _onLocaleChanged(locale: LocaleDict) {
    this.locale = locale;
  }

  __beforeDestroy() {
    this.locale = null; // unlink global view model
    unwatchLocale(this._localeChangedHandler);
  }

  get value(): Date {
    return this._value;
  }

  set value(v: number | string | Date) {
    v = this.parseVal(v);
    if (isDateEqual(this._value, v)) return;
    this._value = v;
    this.inputDate = v && this.dateFormat ? formatDate(v, this.dateFormat) : '';
  }

  get dateFormat() {
    return this._dateFormat;
  }

  set dateFormat(v) {
    if (this._dateFormat === v) return;
    this._dateFormat = v;
    this.pattern = dateFormatToRegExpStr(v);
    this.inputDate = this.value ? formatDate(this.value, v) : '';
  }

  parseVal(v: number | string | Date) {
    if (!v) return null;
    if (isString(v)) {
      if (NUM_REG.test(v)) {
        v = new Date(Number(v));
      } else {
        v = parseDate(v, this.dateFormat);
      }
    } else if (!(isNumber(v) || v instanceof Date)) {
      // eslint-disable-next-line no-console
      console.warn(NOT_VALID);
      return null;
    } else {
      v = new Date(v);
    }
    if (!isDateValid(v)) {
      // eslint-disable-next-line no-console
      console.warn(NOT_VALID);
      return null;
    }
    return v;
  }

  parseIpt() {
    const parsedDate = parseDate(this.inputDate, this.dateFormat);
    return parsedDate && isDateValid(parsedDate) ? parsedDate : null;
  }

  onInputChange(value: string) {
    if (this.inputDate === value) return;
    this.inputDate = value;
    clearTimeout(this._iptChangeTM);
    this._iptChangeTM = window.setTimeout(() => {
      this.handleInput();
    }, this.inputDebounce);
  }

  handleInput() {
    const v = this.parseIpt();
    if (!v) return;
    if (isDateEqual(this._value, v)) return;
    this.value = v;
    this.__notify('change', this.value);
  }

  onClear() {
    this.__notify('confirm', null);
  }

  onFocus() {
    if (this.openOnFocus && !this.showDialog) {
      this.toggleDialog();
    }
  }

  onBlur() {
    this.onCancel();
  }

  toggleDialog() {
    const el = this.__getRef<Input>('input');
    if (this.overrideNative) {
      this.showDialog = !this.showDialog;
      if (this.showDialog) {
        el.focus();
      } else {
        el.blur();
      }
      this.__notify(this.showDialog ? 'opened' : 'closed');
    } else {
      (el.__firstDOM as HTMLElement).click();
    }
  }

  onConfirm(selectedDate: Date) {
    this.__notify('confirm', selectedDate);
    this.onCancel();
  }

  onCancel() {
    if (this._iptChangeTM) {
      clearTimeout(this._iptChangeTM);
    }
    if (this.showDialog) {
      this.toggleDialog();
    }
  }

  onChange(selectedDate: Date) {
    this.__notify('change', selectedDate);
  }
}
