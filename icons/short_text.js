import {
  Icon
} from '../src/icon';

export class IconBaselineShortText extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M4,9h16v2H4V9z M4,13h10v2H4V13z"/></g></g></g></svg>`;
  }
}

const __svg_IconOutlinedShortText = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z"/></svg>`;

export class IconOutlinedShortText extends Icon {
  get svg() {
    return __svg_IconOutlinedShortText;
  }
}

export class IconRoundShortText extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 9h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0 4h8c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z"/></svg>`;
  }
}

export class IconSharpShortText extends Icon {
  get svg() {
    return __svg_IconOutlinedShortText;
  }
}

export class IconTwotoneShortText extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 9h16v2H4zm0 4h10v2H4z"/></svg>`;
  }
}