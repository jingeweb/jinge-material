import {
  Component
} from 'jinge';

import _tpl from './api-table.html';
import _sty from './api-table.scss';

export class ApiTable extends Component {
  static get style() {
    return _sty;
  }

  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.headings = attrs.headings;
    this.props = attrs.props;
  }
}
