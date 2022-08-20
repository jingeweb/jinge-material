import { Attributes, Component } from 'jinge';

import _tpl from './drawer.html';

// export interface DrawerAttrs {
// }
export class NavigationDrawer extends Component {
  static template = _tpl;

  constructor(attrs: Attributes) {
    super(attrs);
  }
}
