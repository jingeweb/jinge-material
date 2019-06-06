import {
  Component,
  VM
} from 'jinge';

import _tpl from './array-checkbox.html';

export default class ExampleArrayCheckbox extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.persons = VM([{name: '小葛'}, {name: '小明'}, {name: '小王'}]);
    this.cities = VM(['Chengdu', 'Beijing', 'Shanghai']);
    this.selectedPersons = VM([]);
    this.selectedCities = VM(['Beijing']);
    this.selectedCitiesDisplay = JSON.stringify(this.selectedCities);
    this.selectedPersonsDisplay = JSON.stringify(this.selectedPersons);
  }
  onSelectedCitiesChange(v) {
    console.log(v);
    this.selectedCitiesDisplay = JSON.stringify(this.selectedCities);
  }
  onSelectedPersonsChange(v) {
    console.log(v);
    this.selectedPersonsDisplay = JSON.stringify(this.selectedPersons);
  }
}