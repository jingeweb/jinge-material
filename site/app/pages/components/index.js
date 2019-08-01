import {
  Component
} from 'jinge';

export * from './button';
export * from './checkbox';
export * from './radio';
export * from './switch';
export * from './content';
export * from './toolbar';
export * from './dialog';
export * from './icon';
export * from './spinner';
export * from './progress';
export * from './popover';
export * from './tooltip';
export * from './popconfirm';
export * from './card';
export * from './list';
export * from './menu';
export * from './drawer';

export class PageComponents extends Component {
  static get template() {
    return '<ui-view/>';
  }
}
