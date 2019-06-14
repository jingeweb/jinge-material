import {
  Icon
} from '../src/icon';

export class IconBaselineKeyboardArrowRight extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>`;
  }
}

const __svg_IconOutlineKeyboardArrowRight = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>`;

export class IconOutlineKeyboardArrowRight extends Icon {
  get svg() {
    return __svg_IconOutlineKeyboardArrowRight;
  }
}

export class IconRoundKeyboardArrowRight extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>`;
  }
}

export class IconSharpKeyboardArrowRight extends Icon {
  get svg() {
    return __svg_IconOutlineKeyboardArrowRight;
  }
}

export class IconTwotoneKeyboardArrowRight extends Icon {
  get svg() {
    return __svg_IconOutlineKeyboardArrowRight;
  }
}