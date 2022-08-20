import { Attributes, Component } from 'jinge';
import _tpl from './navigation-rail.html';

export class NavigationRail extends Component {
  static template = _tpl;

  constructor(attrs: Attributes) {
    super(attrs);
  }
}
