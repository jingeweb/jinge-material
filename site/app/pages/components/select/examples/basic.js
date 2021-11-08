import { Component, vm } from 'jinge';

import _tpl from './basic.html';

export default class ExampleSelectBasic extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.selectedMovie = null;
    this.selectedCountry = 'China';
    this.allCountries = vm(['China', 'United States', 'Japan', 'Australia']);
    this.selectedFont = null;
    this.allFonts = vm([
      {
        id: 'arial',
        name: 'Arial',
      },
      {
        id: 'roboto',
        name: 'Roboto',
      },
      {
        id: 'consolas',
        name: 'Consolas',
      },
    ]);
  }

  onFontChange(font) {
    this.selectedFont = font;
    console.log(font);
  }
}
