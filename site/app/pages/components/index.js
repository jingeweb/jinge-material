export * from './button';
export * from './checkbox';
export * from './radio';
export * from './switch';
export * from './content';
export * from './toolbar';
export * from './dialog';

import {
  Component
} from 'jinge';

export class PageComponents extends Component {
  static get template() {
    return '<ui-view/>';
  }
}