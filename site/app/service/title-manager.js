import {
  Messenger
} from 'jinge';

class TitleManager extends Messenger {
  constructor() {
    super();
    this.currentTitle = '';
  }
  update(title) {
    if (this.currentTitle === title) return;
    this.currentTitle = title;
    document.title = title;
  }
}

// singleton
export const titleManager = new TitleManager();
