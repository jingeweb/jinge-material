import { Attributes, Component, MESSENGER_LISTENERS } from 'jinge';
import _tpl from './card.html';

export interface CardAttrs {
  type?: 'elevated' | 'filled' | 'outlined';
  /** 是否是可交互的。默认为 false。但如果有传递 on: 事件，则默认为 true. */
  interactive?: boolean;
  /** 是否禁用，只在 interactive 为 true 时有效，默认为 false */
  disabled?: boolean;
}

export class Card extends Component {
  static template = _tpl;

  _type: CardAttrs['type'];
  _ctype: string;
  /** interactive */
  _ia: boolean;
  disabled: boolean;

  constructor(attrs: Attributes<CardAttrs>) {
    super(attrs);

    this._type = attrs.type || 'elevated';
    this._ctype = this._type === 'filled' ? 'md-surface-variant' : 'md-surface';
    this._ia = attrs.interactive || !!(this[MESSENGER_LISTENERS]?.size || 0);
    this.disabled = attrs.disabled;
  }
}
