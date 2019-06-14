import {
  Icon
} from '../src/icon';

export class IconBaselineKeyboardArrowUp extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }
}

const __svg_IconOutlineKeyboardArrowUp = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/></svg>`;

export class IconOutlineKeyboardArrowUp extends Icon {
  get svg() {
    return __svg_IconOutlineKeyboardArrowUp;
  }
}

export class IconRoundKeyboardArrowUp extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z"/></svg>`;
  }
}

export class IconSharpKeyboardArrowUp extends Icon {
  get svg() {
    return __svg_IconOutlineKeyboardArrowUp;
  }
}

export class IconTwotoneKeyboardArrowUp extends Icon {
  get svg() {
    return __svg_IconOutlineKeyboardArrowUp;
  }
}