import './index.scss';

import {
  Component
} from 'jinge';

import _tpl from './index.html';

import {
  EnumAttrValidator,
  ELEVATION_ENUMS
} from '../_util';

const elevationValidator = new EnumAttrValidator(
  '<md-toolbar>', 'elevation', ELEVATION_ENUMS
);

export class Toolbar extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    attrs.elevation = 'elevation' in attrs ? Number(attrs.elevation) : 4;
    elevationValidator.assert(attrs);
    super(attrs);
    this.className = attrs.class;
    this.elevation = attrs.elevation;
  }
}
