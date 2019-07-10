import {
  Component
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import ExampleRegularCard from './examples/regular'; 
import sourceExampleRegularCard from './examples/regular.js?example';
import ExampleMediaCard from './examples/media'; 
import sourceExampleMediaCard from './examples/media.js?example';
import ExampleMediaCoverCard from './examples/media-cover'; 
import sourceExampleMediaCoverCard from './examples/media-cover.js?example';
import ExampleThemeCard from './examples/theme'; 
import sourceExampleThemeCard from './examples/theme.js?example';


export class PageCard extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this._api = apis;
    this._examples = {
      regular: {
        component: ExampleRegularCard,
        source: sourceExampleRegularCard
      },
      media: {
        component: ExampleMediaCard,
        source: sourceExampleMediaCard
      },
      mediaCover: {
        component: ExampleMediaCoverCard,
        source: sourceExampleMediaCoverCard
      },
      theme: {
        component: ExampleThemeCard,
        source: sourceExampleThemeCard
      }
    };
  }
}
