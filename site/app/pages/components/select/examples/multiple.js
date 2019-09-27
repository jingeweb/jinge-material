import {
  Component,
  VM
} from 'jinge';

import _tpl from './multiple.html';

export default class ExampleSelectMultiple extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.md-field {
  max-width: 300px;
}`;
  }

  constructor(attrs) {
    super(attrs);
    this.selectedMovies = VM([]);
    this.selectedMoviesDisplay = '';
  }

  onChange() {
    this.selectedMoviesDisplay = JSON.stringify(this.selectedMovies);
  }
}
