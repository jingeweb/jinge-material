import { Attributes, Component } from 'jinge';
import { EnumAttrValidator } from '../_util';
import _tpl from './card-media.html';

const ratioValidator = new EnumAttrValidator('<md-card-media>', 'ratio', [
  '16-9',
  '16/9',
  '16:9',
  '4-3',
  '4/3',
  '4:3',
  '1-1',
  '1/1',
  '1:1',
]);
export interface CardMediaAttrs {
  big?: boolean;
  medium?: boolean;
  ratio?: string;
}

export class CardMedia extends Component {
  static template = _tpl;

  ratioClass: string;
  big: boolean;
  _ratio: string;
  medium: boolean;

  constructor(attrs: Attributes<CardMediaAttrs>) {
    ratioValidator.assert(attrs);
    super(attrs);
    this.ratioClass = '';
    this.big = !!attrs.big;
    this.medium = !!attrs.medium;
    this.ratio = attrs.ratio;
  }

  get ratio() {
    return this._ratio;
  }

  set ratio(v) {
    if (this._ratio === v) return;
    this._ratio = v;
    if (!this._ratio) {
      this.ratioClass = '';
    } else {
      const rts = this._ratio.split(/[:/-]/);
      if (rts.length !== 2) {
        this.ratioClass = '';
      } else {
        this.ratioClass = `md-ratio-${rts[0]}-${rts[1]}`;
      }
    }
  }
}
