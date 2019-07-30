import {
  Icon
} from '../src/icon';

export class IconBaselineArrowDownward extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#010101" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>`;
  }
}

const __svg_IconOutlineArrowDownward = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>`;

export class IconOutlineArrowDownward extends Icon {
  get svg() {
    return __svg_IconOutlineArrowDownward;
  }
}

export class IconRoundArrowDownward extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z"/></svg>`;
  }
}

export class IconSharpArrowDownward extends Icon {
  get svg() {
    return __svg_IconOutlineArrowDownward;
  }
}

export class IconTwotoneArrowDownward extends Icon {
  get svg() {
    return __svg_IconOutlineArrowDownward;
  }
}