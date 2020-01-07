import {
  Component,
  vm,
  _t
} from 'jinge';

import _tpl from './array-checkbox.html';

export default class ExampleArrayCheckbox extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      const persons = vm([{
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
    this.cities = vm(['Chengdu', 'Beijing', 'Shanghai']);
    this.selectedPersons = vm([]);
    this.selectedCities = vm(['Beijing']);
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
