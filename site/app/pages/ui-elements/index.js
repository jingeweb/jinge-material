export * from './elevation';

import {
  Component
} from 'jinge';

export class PageUiElements extends Component {
  static get template() {
    return '<ui-view/>';
  }
}