import {
  Component
} from 'jinge';

export default class ExamplePaperContent extends Component {
  static get template() {
    return `
<div>
  <md-content>Background</md-content>
  <md-content class="md-primary">Primary</md-content>
  <md-content class="md-accent">Accent</md-content>
</div>`;
  }

  static get style() {
    return `
div /deep/ > .md-content {
  width: 200px;
  height: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}`;
  }
}
