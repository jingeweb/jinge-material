export * from './button';
export * from './checkbox';

import {
  Component
} from 'jinge';

export class PageComponents extends Component {
  static get template() {
    return '<ui-view/>';
  }
}