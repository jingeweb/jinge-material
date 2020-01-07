import {
  Component,
  vm
} from 'jinge';

import _tpl from './template.html';
import _sty from './template.scss';

export default class ExampleACTemplate extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);
    this.value = null;
    this.selected = null;
    this.colors = vm([{
      name: 'Aqua', color: '#00ffff'
    }, {
      name: 'Aquamarine', color: '#7fffd4'
    }, {
      name: 'Azure', color: '#f0ffff'
    }, {
      name: 'Beige', color: '#f5f5dc'
    }, {
      name: 'Black', color: '#000000'
    }, {
      name: 'Blue', color: '#0000ff'
    }, {
      name: 'Brown', color: '#a52a2a'
    }, {
      name: 'Crimson', color: '#dc143c'
    }, {
      name: 'Cyan', color: '#00ffff'
    }, {
      name: 'Deep Pink', color: '#ff1493'
    }, {
      name: 'Dim Gray', color: '#696969'
    }, {
      name: 'Fuchsia', color: '#ff00ff'
    }, {
      name: 'Gold', color: '#ffd700'
    }, {
      name: 'Gray', color: '#808080'
    }, {
      name: 'Green', color: '#008000'
    }, {
      name: 'Green Yellow', color: '#adff2f'
    }, {
      name: 'Grey', color: '#808080'
    }, {
      name: 'Hotpink', color: '#ff69b4'
    }, {
      name: 'Indigo', color: '#4b0082'
    }, {
      name: 'Ivory', color: '#fffff0'
    }, {
      name: 'Khaki', color: '#f0e68c'
    }, {
      name: 'Lavender', color: '#e6e6fa'
    }, {
      name: 'Lime', color: '#00ff00'
    }, {
      name: 'Magenta', color: '#ff00ff'
    }, {
      name: 'Maroon', color: '#800000'
    }, {
      name: 'Navy', color: '#000080'
    }, {
      name: 'Olive', color: '#808000'
    }, {
      name: 'Orange', color: '#ffa500'
    }, {
      name: 'Orange Red', color: '#ff4500'
    }, {
      name: 'Pale Golden Rod', color: '#eee8aa'
    }, {
      name: 'Pale Green', color: '#98fb98'
    }, {
      name: 'Pink', color: '#ffc0cb'
    }, {
      name: 'Purple', color: '#800080'
    }, {
      name: 'Red', color: '#ff0000'
    }, {
      name: 'Royal Blue', color: '#4169e1'
    }, {
      name: 'Sea Green', color: '#2e8b57'
    }, {
      name: 'Silver', color: '#c0c0c0'
    }, {
      name: 'Sky Blue', color: '#87ceeb'
    }, {
      name: 'Slate Blue', color: '#6a5acd'
    }, {
      name: 'Slate Grey', color: '#708090'
    }, {
      name: 'Teal', color: '#008080'
    }, {
      name: 'Turquoise', color: '#40e0d0'
    }, {
      name: 'Violet', color: '#ee82ee'
    }, {
      name: 'White', color: '#ffffff'
    }, {
      name: 'Yellow', color: '#ffff00'
    }]);
  }

  onSelected(item) {
    this.selected = item;
  }

  noop() {
    alert('noop');
  }
}
