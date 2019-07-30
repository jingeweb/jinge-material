import {
  Icon
} from '../src/icon';

export class IconBaselineEqualizer extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/></svg>`;
  }
}

const __svg_IconOutlineEqualizer = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/></svg>`;

export class IconOutlineEqualizer extends Icon {
  get svg() {
    return __svg_IconOutlineEqualizer;
  }
}

export class IconRoundEqualizer extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2zm-6 0c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2zm10-9v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2z"/></svg>`;
  }
}

export class IconSharpEqualizer extends Icon {
  get svg() {
    return __svg_IconOutlineEqualizer;
  }
}

export class IconTwotoneEqualizer extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z"/></svg>`;
  }
}