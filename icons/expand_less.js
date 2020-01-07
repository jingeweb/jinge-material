import {
  Icon
} from '../src/icon';

export class IconBaselineExpandLess extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>`;
  }
}

const __svg_IconOutlinedExpandLess = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>`;

export class IconOutlinedExpandLess extends Icon {
  get svg() {
    return __svg_IconOutlinedExpandLess;
  }
}

export class IconRoundExpandLess extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z"/></svg>`;
  }
}

export class IconSharpExpandLess extends Icon {
  get svg() {
    return __svg_IconOutlinedExpandLess;
  }
}

export class IconTwotoneExpandLess extends Icon {
  get svg() {
    return __svg_IconOutlinedExpandLess;
  }
}