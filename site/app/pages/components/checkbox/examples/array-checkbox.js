import {
  Component,
  VM,
  I18N_WATCH,
  _t
} from 'jinge';

import _tpl from './array-checkbox.html';

export default class ExampleArrayCheckbox extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this[I18N_WATCH](() => {
      const persons = VM([{
        name: _t('小葛')
      }, {
        name: _t('小明')
      }, {
        name: _t('小王')
      }]);
      if (!this.persons) {
        this.persons = persons;
      } else {
        persons.forEach((p, i) => {
          this.persons[i].name = p.name;
        });
        this.selectedPersonsDisplay = JSON.stringify(this.selectedPersons);
      }
    }, true);
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
