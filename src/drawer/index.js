import './index.scss';

import {
  Component, NOTIFY
} from 'jinge';
import {
  EnumAttrValidator
} from '../_util';

import _tpl from './index.html';

const permanentValidator = new EnumAttrValidator(
  '<md-drawer>', 'permanent', [
    'full', 'clipped', 'card'
  ]
);
const persistentValidator = new EnumAttrValidator(
  '<md-drawer>', 'persistent', [
    'full', 'mini'
  ]
);

export class Drawer extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    permanentValidator.assert(attrs);
    persistentValidator.assert(attrs);
    super(attrs);
    this.right = attrs.right;
    this.permanent = attrs.permanent;
    this.persistent = attrs.persistent;
    this.active = attrs.active;
    this.fixed = attrs.fixed;
  }

  close() {
    this.active = false;
    this[NOTIFY]('update.active', false);
  }
}
