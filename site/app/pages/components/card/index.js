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
import ExampleExpandCard from './examples/expand';
import sourceExampleExpandCard from './examples/expand.js?example';
import ExampleLayoutsCard from './examples/layouts';
import sourceExampleLayoutsCard from './examples/layouts.js?example';

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
      },
      expand: {
        component: ExampleExpandCard,
        source: sourceExampleExpandCard
      },
      layouts: {
        component: ExampleLayoutsCard,
        source: sourceExampleLayoutsCard
      }
    };
  }
}
