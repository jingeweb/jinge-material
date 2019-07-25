
import './card-media.scss';

import {
  Component
} from 'jinge';
import {
  EnumAttrValidator
} from '../_util';

const ratioValidator = new EnumAttrValidator(
  '<md-card-media>',
  'ratio', [
    '16-9', '16/9', '16:9',
    '4-3', '4/3', '4:3',
    '1-1', '1/1', '1:1'
  ]
);
export class CardMedia extends Component {
  static get template() {
    return `
<div class="md-card-media\${!ratio && medium ? ' md-medium' : ''}\${!ratio && big ? ' md-big' : ''}\${ratioClass}">
  <_slot />
</div>`;
  }

  constructor(attrs) {
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
        this.ratioClass = ` md-ratio-${rts[0]}-${rts[1]}`;
      }
    }
  }
}
