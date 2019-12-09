import {
  Component
} from 'jinge';

export * from './elevation';
export * from './typography';
export * from './layout';
export * from './states';

export class PageUiElements extends Component {
  static get template() {
    return '<ui-view/>';
  }
}
