import './index.scss';

import {
  Component,
} from 'jinge';
import {
  EnumAttrValidator
} from '../_util';

const tagValidator = new EnumAttrValidator(
  '<md-content>',
  'tag', [
    'div', 'span', 'p'
  ]
);
export class Content extends Component {
  static get template() {
    return `
<switch e:test="tag">
<span slot-pass:span class="md-content\${className ? ' ' + className : ''}" e:style="style"><_slot/></span>
<p slot-pass:p class="md-content\${className ? ' ' + className : ''}" e:style="style"><_slot/></p>
<div slot-pass:default class="md-content\${className ? ' ' + className : ''}" e:style="style"><_slot/></div>
</switch>
    `;
  }
  constructor(attrs) {
    tagValidator.assert(attrs);
    super(attrs);
    this.className = attrs.class;
    this.style = attrs.style || '';
    this.tag = attrs.tag || 'div';
  }
}