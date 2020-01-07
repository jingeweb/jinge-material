import {
  Component,
  vm,
  _t
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
      }
    }, true);
    this.cities = vm(['Chengdu', 'Beijing', 'Shanghai']);
    this.selectedCity = this.cities[0];
    this.selectedPerson = null;
  }

  onSelectedPersonChange(sp) {
    this.selectedPerson = sp;
    console.log(sp);
  }
}
