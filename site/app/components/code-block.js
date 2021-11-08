import highlight from 'highlight.js/lib/core';
import highlightSCSS from 'highlight.js/lib/languages/scss';
import highlightXML from 'highlight.js/lib/languages/xml';
import highlightBash from 'highlight.js/lib/languages/bash';
import highlightJavascript from 'highlight.js/lib/languages/javascript';
import Clipboard from 'clipboard';
import { Component, _t } from 'jinge';
import { getIndentedSource } from '../service';
import { Snackbar } from '../../../src/snackbar';

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

  __afterRender() {
    this._$ce = this.__getRef('code'); // get code dom element
    this.reindentSource();
    this.enableCopy();

    highlight.highlightBlock(this._$ce);
  }

  reindentSource() {
    this._$ce.textContent = getIndentedSource(this._$ce.textContent);
  }

  enableCopy() {
    const $cb = this.__getRef('copy'); // get copy button
    if (!$cb) return;

    const clipboard = new Clipboard($cb.__firstDOM, {
      target: () => this._$ce,
    });
    clipboard.on('success', (event) => {
      event.clearSelection();
      Snackbar.show({
        message: _t('代码已复制！'),
        duration: 1500,
      });
    });
  }
}
