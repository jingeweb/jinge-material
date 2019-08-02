import {
  Component,
  VM
} from 'jinge';

import _tpl from './simple-radios.html';

export default class ExampleSimpleRadio extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
table th { padding-right: 10px; text-align: left; }
table td { padding-right: 10px; }
`;
  }

  constructor(attrs) {
    super(attrs);
    this.v = null;
    this.persons = VM([{
      name: '小葛'
    }, {
      name: '小明'
    }, {
      name: '小王'
    }]);
    this.cities = VM(['Chengdu', 'Beijing', 'Shanghai']);
    this.selectedCity = this.cities[0];
    this.selectedPerson = null;
  }

  onSelectedPersonChange(sp) {
    this.selectedPerson = sp;
    console.log(sp);
  }
}
