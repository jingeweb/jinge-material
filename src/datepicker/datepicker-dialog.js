import './datepicker-dialog.scss';

import {
  Component,
  VM,
  BEFORE_DESTROY,
  NOTIFY,
  UPDATE_IF_NEED,
  isFunction
} from 'jinge';
import {
  isEqual as isDateEqual,
  getDaysInMonth
} from '../_util/date';
import {
  unwatchLocale,
  watchLocale
} from '../_config';

import _tpl from './datepicker-dialog.html';

function createDay(date) {
  date = date || new Date();
  return VM({
    empty: false,
    disabled: false,
    selected: true,
    y: date.getFullYear(),
    m: date.getMonth(),
    w: date.getDay(),
    d: date.getDate()
  });
}

export class DatepickerDialog extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    if (attrs.disabledDates && !isFunction(attrs.disabledDates)) {
      throw new Error('<md-datepicker>: disabledDates must be function.');
    }
    super(attrs);

    this.currentDay = null;
    this.selectedDay = null;
    this.contentStyle = '';
    this.showDialog = false;
    this.currentView = 'day';
    this.dayPickerHeader = '';

    this.weekdays = null;
    this._years = new Array(2300 - 1900).fill(0).map((n, i) => 1900 + i);

    this.date = attrs.date;
    this.disabledDates = attrs.disabledDates;
    this.immediately = attrs.immediately;

    if (!this.currentDay) {
      this.currentDay = createDay();
    }

    this._localeChangedHandler = this._onLocaleChanged.bind(this);
    watchLocale(this._localeChangedHandler, true);
  }

  _onLocaleChanged(locale) {
    this.locale = locale;
    this._updateRenderDays();
    this._updateWeekdays();
    this._updateDayPickerHeader();
  }

  [BEFORE_DESTROY]() {
    unwatchLocale(this._localeChangedHandler);
  }

  get date() {
    return this._date;
  }

  set date(v) {
    if (isDateEqual(this._date, v)) return;
    this._date = v;
    this.currentDay = createDay(v);
    if (v) {
      this.currentDay.selected = true;
      this.selectedDay = createDay(v);
    }
    this[UPDATE_IF_NEED](this._updateRenderDays);
  }

  switchMonth(index) {
    this.currentDay.m = index;
    this.currentView = 'day';
    this._updateRenderDays();
    this._updateDayPickerHeader();
  }

  previousMonth() {
    const cd = this.currentDay;
    if (cd.m === 0) {
      cd.m = 11;
      cd.y--;
    } else {
      cd.m--;
    }
    this._updateRenderDays();
    this._updateDayPickerHeader();
  }

  nextMonth() {
    const cd = this.currentDay;
    if (cd.m === 11) {
      cd.m = 0;
      cd.y++;
    } else {
      cd.m++;
    }
    this._updateRenderDays();
    this._updateDayPickerHeader();
  }

  switchYear(year) {
    this.currentDay.y = year;
    this.currentView = 'month';
  }

  onCancel() {
    this[NOTIFY]('cancel');
  }

  onConfirm() {
    this[NOTIFY]('confirm', this._date);
  }

  _updateWeekdays() {
    const lc = this.locale;
    const ws = lc.weekdaysMin;
    this.weekdays = ws.slice(lc.firstDayOfWeek).concat(
      ws.slice(0, lc.firstDayOfWeek)
    );
  }

  _updateDayPickerHeader() {
    const lc = this.locale;
    const {
      y, m
    } = this.currentDay;
    this.dayPickerHeader = lc.dayPickerHeader
      .replace(/YYYY/g, y)
      .replace(/MMMM/g, () => lc.months[m])
      .replace(/MMM/g, () => lc.monthsShort[m])
      .replace(/MM/g, () => m >= 10 ? m : ('0' + m))
      .replace(/M/g, () => m);
  }

  _updateRenderDays() {
    const lc = this.locale;
    const cd = this.currentDay;
    const {
      y, m, d
    } = cd;
    const startDate = new Date(y, m, 1);
    const firstDayOfMonth = startDate.getDay();
    cd.w = (d + firstDayOfMonth - 1) % 7;

    let emptyDays = firstDayOfMonth - lc.firstDayOfWeek;
    emptyDays += emptyDays < 0 ? 7 : 0;
    const totalDays = emptyDays + getDaysInMonth(y, m);

    const sd = this.selectedDay;
    this.renderDays = VM(new Array(totalDays).fill(0).map((n, i) => {
      const di = i - emptyDays + 1;
      const wi = (di + firstDayOfMonth - 1) % 7;
      return i < emptyDays ? {
        empty: true,
        selected: false
      } : {
        empty: false,
        selected: (!!sd) && sd.y === cd.y && sd.m === cd.m && sd.d === di,
        disabled: (!!this.disabledDates) && this.disabledDates(y, m, di, wi),
        y: y,
        m: m,
        w: wi,
        d: di
      };
    }));
    this.contentStyle = `height: ${72 + Math.ceil(totalDays / 7) * 32}px;`;
  }

  selectDate(day) {
    if (day.disabled || day.selected) return;
    this.renderDays.forEach(rd => {
      rd.selected = rd === day;
    });
    this.selectedDay = day;
    this._date = new Date(day.y, day.m, day.d);
    this[NOTIFY]('change', this._date);
    if (this.immediately) {
      this.onCancel();
    }
  }
}
