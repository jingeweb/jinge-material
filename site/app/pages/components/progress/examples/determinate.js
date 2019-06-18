import {
  Component, BEFORE_DESTROY
} from 'jinge';

// import _tpl from './determinate.html';

export class T extends Component {
  static get template() {
    return 'yeap!';
  }
  [BEFORE_DESTROY]() {
    console.log('bd');
  }
}

export default class ExampleDeterminateProgress extends Component {
  static get style() {
    return 'div /deep/ > .md-progress-bar { margin: 24px; }';
  }
  static get template() {
    // return _tpl;
    return `
<div>
  <md-tooltip title="hello">
    <span>click me</span>
  </md-tooltip>
</div>
`;
  }
  constructor(attrs) {
    super(attrs);
    this.amount = Math.random() * 100 | 0;
  }
}