import {
  Component
} from 'jinge';
import _tpl from './index.html';

import Horizontal from './examples/horizontal';
import sourceHorizontal from './examples/horizontal?example';
import Alternative from './examples/alternative';
import sourceAlternative from './examples/alternative?example';
import Vertical from './examples/vertical';
import sourceVertical from './examples/vertical?example';
import Linear from './examples/linear';
import sourceLinear from './examples/linear?example';
import NonEditable from './examples/non-editable';
import sourceNonEditable from './examples/non-editable?example';

import apis from './api';

export class PageSteppers extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._api = apis;
    this._examples = {
      horizontal: {
        component: Horizontal,
        source: sourceHorizontal
      },
      alternative: {
        component: Alternative,
        source: sourceAlternative
      },
      vertical: {
        component: Vertical,
        source: sourceVertical
      },
      linear: {
        component: Linear,
        source: sourceLinear
      },
      nonEditable: {
        component: NonEditable,
        source: sourceNonEditable
      }
    };
  }
}
