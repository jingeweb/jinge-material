import {
  Component
} from 'jinge';

export default class Wave extends Component {
  constructor(attrs) {
    super(attrs);
    this.style = attrs.style;
    this.class = attrs.class;
    this.animating = true;
  }
  ot(action) {
    if (action === 'after-enter'){
      this.animating = false;
      this.notify('end');
    }
  }
}