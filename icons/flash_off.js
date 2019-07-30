import {
  Icon
} from '../src/icon';

export class IconBaselineFlashOff extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z"/></svg>`;
  }
}

const __svg_IconOutlineFlashOff = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 10h-3.61l2.28 2.28zm0-8H7v1.61l6.13 6.13zm-13.59.86L2 4.27l5 5V13h3v9l3.58-6.15L17.73 20l1.41-1.41z"/></svg>`;

export class IconOutlineFlashOff extends Icon {
  get svg() {
    return __svg_IconOutlineFlashOff;
  }
}

export class IconRoundFlashOff extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.12 11.5c.39-.67-.09-1.5-.86-1.5h-1.87l2.28 2.28.45-.78zm.16-8.05c.33-.67-.15-1.45-.9-1.45H8c-.55 0-1 .45-1 1v.61l6.13 6.13 3.15-6.29zm2.16 14.43L4.12 3.56c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L7 9.27V12c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l2.65-4.55 3.44 3.44c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41z"/></svg>`;
  }
}

export class IconSharpFlashOff extends Icon {
  get svg() {
    return __svg_IconOutlineFlashOff;
  }
}

export class IconTwotoneFlashOff extends Icon {
  get svg() {
    return __svg_IconOutlineFlashOff;
  }
}