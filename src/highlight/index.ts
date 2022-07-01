import './index.scss';

import { Attributes, Component } from 'jinge';
import { fuzzyHighlight, includesHighlight, startsHighlight, EnumAttrValidator } from '../_util';
import _tpl from './index.html';

function generateHighlight(
  text: string,
  term: string,
  searchMethod: 'fuzzy' | 'includes' | 'starts',
  ignoreCase: boolean,
) {
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

const SearchMethodValidator = new EnumAttrValidator('<md-highlight>', 'searchMethod', ['fuzzy', 'starts', 'includes']);

export interface HighlightTextAttrs {
  term: string;
  text: string;
  class?: string;
  style?: string;
  searchMethod?: 'fuzzy' | 'includes' | 'starts';
  ignoreCase?: boolean;
}
export class HighlightText extends Component {
  static template = _tpl;

  _term: string;
  searchMethod?: 'fuzzy' | 'includes' | 'starts';
  ignoreCase?: boolean;
  _text: string;

  constructor(attrs: Attributes<HighlightTextAttrs>) {
    SearchMethodValidator.assert(attrs);
    super(attrs);
    this.term = attrs.term;
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
    this.__updateIfNeed();
  }

  get text() {
    return this._text;
  }

  set text(v) {
    if (this._text === v) return;
    this._text = v;
    this.__updateIfNeed();
  }

  __afterRender() {
    this.__update();
  }

  __update() {
    const el = this.__firstDOM as HTMLElement;
    el.innerHTML = generateHighlight(this.text, this.term, this.searchMethod, this.ignoreCase);
  }
}
