import {
  Icon
} from '../src/icon';

export class IconBaselineKeyboardArrowLeft extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>`;
  }
}

const __svg_IconOutlinedKeyboardArrowLeft = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>`;

export class IconOutlinedKeyboardArrowLeft extends Icon {
  get svg() {
    return __svg_IconOutlinedKeyboardArrowLeft;
  }
}

export class IconRoundKeyboardArrowLeft extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"/></svg>`;
  }
}

export class IconSharpKeyboardArrowLeft extends Icon {
  get svg() {
    return __svg_IconOutlinedKeyboardArrowLeft;
  }
}

export class IconTwotoneKeyboardArrowLeft extends Icon {
  get svg() {
    return __svg_IconOutlinedKeyboardArrowLeft;
  }
}