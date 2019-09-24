import {
  Component,
  VM
} from 'jinge';

import _tpl from './async.html';
import debounce from 'lodash-es/debounce';

import {
  fuzzyHighlight,
  fuzzySearch
} from '../../../../../../src/_util/search';

const MOCK_DATA_ALL_COUNTRIES = [{
  id: 1,
  name: 'Algeria'
}, {
  id: 2,
  name: 'Argentina'
}, {
  id: 3,
  name: 'Brazil'
}, {
  id: 4,
  name: 'Canada'
}, {
  id: 5,
  name: 'Italy'
}, {
  id: 6,
  name: 'Japan'
}, {
  id: 7,
  name: 'United Kingdom'
}, {
  id: 8,
  name: 'United States'
}];

function mockFetchCountries(v) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        return reject(new Error('server error.'));
      }
      if (!v) {
        resolve(MOCK_DATA_ALL_COUNTRIES.slice());
      } else {
        resolve(MOCK_DATA_ALL_COUNTRIES.filter(ci => {
          return fuzzySearch(ci.name, v);
        }).map(ci => {
          return {
            name: ci.name,
            html: fuzzyHighlight(ci.name, v)
          };
        }));
      }
    }, 500);
  });
}

export default class ExampleACAsync extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.value = '';
    this.getCountriesPromise = null;
    this._delayGetCountries = debounce(this._getCountries.bind(this), 400);
  }

  log(v) {
    console.log(v);
  }

  _getCountries() {
    console.log('will get countries');
    this.getCountriesPromise = VM(mockFetchCountries(this.value).then(result => {
      console.log('got countries', result);
      return VM(result);
    }, () => {
      console.error('failed to get countries due to network error');
    }));
  }
}
