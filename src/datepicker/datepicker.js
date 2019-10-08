import './datepicker.scss';

import {
  Component,
  isNumber,
  isString,
  instanceOf,
  NOTIFY,
  GET_REF,
  GET_FIRST_DOM,
  VM,
  BEFORE_DESTROY
} from 'jinge';
import {
  isEqual as isDateEqual,
  isValid as isDateValid,
  format as formatDate,
  parse as parseDate,
  formatToReStr as dateFormatToRegExpStr
} from '../_util/date';
import {
  getAndWatchLocale,
  unwatchLocale
} from '../_config';

import _tpl from './datepicker.html';

const NUM_REG = /^\d+$/;
const NOT_VALID = '<md-datepicker>: value is not a valid date. use Date.now() instead.';

export class Datepicker extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
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

  _onLocaleChanged(locale) {
    this.locale = locale;
  }

  [BEFORE_DESTROY]() {
    this.locale = null; // unlink global view model
    unwatchLocale(this._localeChangedHandler);
  }

  get value() {
    return this._value;
  }

  set value(v) {
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

  parseVal(v) {
    if (!v) return null;
    if (isString(v)) {
      if (NUM_REG.test(v)) {
        v = new Date(Number(v));
      } else {
        v = parseDate(v, this.dateFormat);
      }
    } else if (!(isNumber(v) || instanceOf(v, Date))) {
      console.warn(NOT_VALID);
      return null;
    } else {
      v = new Date(v);
    }
    if (!isDateValid(v)) {
      console.warn(NOT_VALID);
      return null;
    }
    return v;
  }

  parseIpt() {
    const parsedDate = parseDate(this.inputDate, this.dateFormat, new Date());
    return parsedDate && isDateValid(parsedDate) ? parsedDate : null;
  }

  onInputChange(value) {
    if (this.inputDate === value) return;
    this.inputDate = value;
    clearTimeout(this._iptChangeTM);
    this._iptChangeTM = setTimeout(() => {
      this.handleInput();
    }, this.inputDebounce);
  }

  handleInput() {
    const v = this.parseIpt();
    if (!v) return;
    if (isDateEqual(this._value, v)) return;
    this.value = VM(v);
    this[NOTIFY]('change', this.value);
  }

  onClear() {
    this[NOTIFY]('confirm', null);
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
    const el = this[GET_REF]('input');
    if (this.overrideNative) {
      this.showDialog = !this.showDialog;
      if (this.showDialog) {
        el.focus();
      } else {
        el.blur();
      }
      this[NOTIFY](this.showDialog ? 'opened' : 'closed');
    } else {
      el[GET_FIRST_DOM]().click();
    }
  }

  onConfirm(selectedDate) {
    this[NOTIFY]('confirm', selectedDate);
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

  onChange(selectedDate) {
    this[NOTIFY]('change', selectedDate);
  }
}
