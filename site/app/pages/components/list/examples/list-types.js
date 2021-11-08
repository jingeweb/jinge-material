import { Component } from 'jinge';
import { DialogAlert } from '../../../../../../src/dialog';
import _tpl from './list-types.html';

export default class ExampleListTypes extends Component {
  static get style() {
    return `
.md-list {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  margin-right: 4px;
  vertical-align: top;
  border: 1px solid rgba(0, 0, 0, 0.12);
}`;
  }

  static get template() {
    return _tpl;
  }

  alert() {
    DialogAlert.show('You clicked me!');
  }
}
