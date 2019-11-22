import highlight from 'highlight.js/lib/highlight.js';
import highlightSCSS from 'highlight.js/lib/languages/scss';
import highlightXML from 'highlight.js/lib/languages/xml';
import highlightBash from 'highlight.js/lib/languages/bash';
import highlightJavascript from 'highlight.js/lib/languages/javascript';
import Clipboard from 'clipboard';
import {
  Component,
  AFTER_RENDER,
  GET_REF,
  GET_FIRST_DOM
} from 'jinge';
import {
  getIndentedSource
} from '../service';

import _tpl from './code-block.html';
import _sty from './code-block.scss';
import './code-block.global.scss';

highlight.registerLanguage('scss', highlightSCSS);
highlight.registerLanguage('xml', highlightXML);
highlight.registerLanguage('javascript', highlightJavascript);
highlight.registerLanguage('bash', highlightBash);

export class CodeBlock extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);
    this._lang = attrs.lang;
    this._code = attrs.code || '';
    this.height = attrs.height || 450;
    this.showMessage = false;
    this._$ce = null;
  }

  [AFTER_RENDER]() {
    this._$ce = this[GET_REF]('code'); // get code dom element
    this.reindentSource();
    this.enableCopy();

    highlight.highlightBlock(this._$ce);
  }

  reindentSource() {
    this._$ce.textContent = getIndentedSource(this._$ce.textContent);
  }

  enableCopy() {
    const $cb = this[GET_REF]('copy'); // get copy button
    if (!$cb) return;

    const clipboard = new Clipboard($cb[GET_FIRST_DOM](), {
      target: () => this._$ce
    });
    let timer = null;

    clipboard.on('success', event => {
      event.clearSelection();
      this.showMessage = true;

      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        this.showMessage = false;
      }, 2000);
    });
  }
}
