import './index.scss';

import { Attributes, Component } from 'jinge';

import { EnumAttrValidator, ELEVATION_ENUMS } from '../_util';
import _tpl from './index.html';

const elevationValidator = new EnumAttrValidator('<md-toolbar>', 'elevation', ELEVATION_ENUMS);

export interface ToolbarAttrs {
  elevation?: string | number;
}
export class Toolbar extends Component {
  static template = _tpl;

  elevation: number;

  constructor(attrs: Attributes<ToolbarAttrs>) {
    attrs.elevation = 'elevation' in attrs ? Number(attrs.elevation) : 4;
    elevationValidator.assert(attrs);
    super(attrs);
    this.elevation = attrs.elevation;
  }
}
