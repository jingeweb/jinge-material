import {
  Icon
} from '../src/icon';

export class IconBaselineBookmark extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>`;
  }
}

const __svg_IconOutlinedBookmark = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>`;

export class IconOutlinedBookmark extends Icon {
  get svg() {
    return __svg_IconOutlinedBookmark;
  }
}

export class IconRoundBookmark extends Icon {
  get svg() {
    return __svg_IconOutlinedBookmark;
  }
}

export class IconSharpBookmark extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5v18l7-3 7 3V3z"/></svg>`;
  }
}

export class IconTwotoneBookmark extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 17.97l5-2.15 5 2.15V5H7z" opacity=".3"/><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 14.97l-5-2.14-5 2.14V5h10v12.97z"/></svg>`;
  }
}