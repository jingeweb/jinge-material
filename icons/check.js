import {
  Icon
} from '../src/icon';

export class IconBaselineCheck extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
  }
}

const __svg_IconOutlinedCheck = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>`;

export class IconOutlinedCheck extends Icon {
  get svg() {
    return __svg_IconOutlinedCheck;
  }
}

export class IconRoundCheck extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"/></svg>`;
  }
}

export class IconSharpCheck extends Icon {
  get svg() {
    return __svg_IconOutlinedCheck;
  }
}

export class IconTwotoneCheck extends Icon {
  get svg() {
    return __svg_IconOutlinedCheck;
  }
}