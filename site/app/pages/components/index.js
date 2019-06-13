export * from './button';
export * from './checkbox';
export * from './radio';
export * from './switch';
export * from './content';
export * from './toolbar';
export * from './dialog';
export * from './icon';

import {
  Component
} from 'jinge';

export class PageComponents extends Component {
  static get template() {
    return '<ui-view/>';
  }
}