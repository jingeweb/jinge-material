import {
  Component
} from 'jinge';

export * from './elevation';

export class PageUiElements extends Component {
  static get template() {
    return '<ui-view/>';
  }
}
