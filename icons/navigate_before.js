import {
  Icon
} from '../src/icon';

export class IconBaselineNavigateBefore extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>`;
  }
}

const __svg_IconOutlinedNavigateBefore = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/></svg>`;

export class IconOutlinedNavigateBefore extends Icon {
  get svg() {
    return __svg_IconOutlinedNavigateBefore;
  }
}

export class IconRoundNavigateBefore extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.91 6.71c-.39-.39-1.02-.39-1.41 0L8.91 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z"/></svg>`;
  }
}

export class IconSharpNavigateBefore extends Icon {
  get svg() {
    return __svg_IconOutlinedNavigateBefore;
  }
}

export class IconTwotoneNavigateBefore extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/></svg>`;
  }
}