import {
  Component
} from 'jinge';

import _tpl from './sizes.html';

export default class ExampleAvatarSizes extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.md-avatar {
  margin-right: 4px;
}
.separator + .separator {
  margin-top: 24px;
}`;
  }
}
