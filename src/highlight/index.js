import './index.scss';

import {
  Component,
  AFTER_RENDER,
  UPDATE_IF_NEED,
  UPDATE,
  GET_FIRST_DOM
} from 'jinge';
import {
  fuzzyHighlight,
  includesHighlight,
  startsHighlight,
  EnumAttrValidator
} from '../_util';

function generateHighlight(text, term, searchMethod, ignoreCase) {
  switch (searchMethod) {
    case 'fuzzy':
      return fuzzyHighlight(text, term, ignoreCase);
    case 'includes':
      return includesHighlight(text, term, ignoreCase);
    case 'starts':
      return startsHighlight(text, term, ignoreCase);
    default:
      return text;
  }
}

const SearchMethodValidator = new EnumAttrValidator(
  '<md-highlight>', 'searchMethod', [
    'fuzzy', 'starts', 'includes'
  ]
);

export class HighlightText extends Component {
  static get template() {
    return `
<div
  class="md-highlight-text\${className ? ' ' + className : ''}"
  e:style="style"
></div>`;
  }

  constructor(attrs) {
    SearchMethodValidator.assert(attrs);
    super(attrs);
    this.term = attrs.term;
    this.className = attrs.class;
    this.style = attrs.style;
    this.searchMethod = attrs.searchMethod || 'fuzzy';
    this.ignoreCase = attrs.ignoreCase !== false;
    this.text = attrs.text;
  }

  get term() {
    return this._term;
  }

  set term(v) {
    if (this._term === v) return;
    this._term = v;
    this[UPDATE_IF_NEED]();
  }

  get text() {
    return this._text;
  }

  set text(v) {
    if (this._text === v) return;
    this._text = v;
    this[UPDATE_IF_NEED]();
  }

  [AFTER_RENDER]() {
    this[UPDATE]();
  }

  [UPDATE]() {
    const el = this[GET_FIRST_DOM]();
    el.innerHTML = generateHighlight(this.text, this.term, this.searchMethod, this.ignoreCase);
  }
}
