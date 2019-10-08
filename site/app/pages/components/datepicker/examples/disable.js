import {
  Component, VM
} from 'jinge';

import _tpl from './disable.html';

export default class ExampleDatepickerDisable extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
p {
  display: flex;
  flex-wrap: wrap;
}
div {
  flex: 1;
  min-width: 120px;
  margin: 0 6px;
}`;
  }

  constructor(attrs) {
    super(attrs);
    this.selectedDate = VM(new Date('2018-07-12'));
  }

  isHoliday(year, month, date, weekday) {
    return weekday === 6 || weekday === 0;
  }
}
