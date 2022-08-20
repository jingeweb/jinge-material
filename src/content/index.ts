import { Attributes, Component, isNumber, isString, MESSENGER_LISTENERS } from 'jinge';
import _tpl from './content.html';

export interface ContentAttrs {
  type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'surface'
    | 'primary-container'
    | 'secondary-container'
    | 'tertiary-container'
    | 'surface-variant';
  elevation?: string | number;
  interactive?: boolean;
  /** 是否禁用 elevation 状态下的阴影。用于比如 topbar 等不需要阴影的场景。 */
  noShadow?: boolean;
}

function cev(ev?: string | number) {
  if (isNumber(ev)) return ev;
  if (isString(ev)) return Number(ev);
  return -1;
}
export class Content extends Component {
  static template = _tpl;

  /** elevation */
  ev: number;
  _type: ContentAttrs['type'];
  _ia: boolean;
  /** no shadow */
  _ns: boolean;

  constructor(attrs: Attributes<ContentAttrs>) {
    super(attrs);
    this._type = attrs.type || 'surface';
    this._ia = attrs.interactive || (this[MESSENGER_LISTENERS]?.size || 0) > 0;
    this._ns = attrs.noShadow;
    this.ev = cev(attrs.elevation);
  }
}

export interface SurfaceAttrs {
  elevation?: 1 | 2 | 3 | 4 | 5;
  shadow?: boolean;
  variant?: boolean;
}
export class Surface extends Component {
  elevation?: number;
  shadow?: boolean;
  variant?: boolean;

  constructor(attrs: Attributes<SurfaceAttrs>) {
    super(attrs);
    this.elevation = attrs.elevation;
    this.shadow = attrs.shadow;
    this.variant = attrs.variant;
  }
}
