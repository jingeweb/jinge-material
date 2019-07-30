import {
  Icon
} from '../src/icon';

export class IconBaselineShortText extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><path id="a" d="M0 0h24v24H0V0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path d="M4 9h16v2H4zm0 4h10v2H4z" clip-path="url(#b)"/></svg>`;
  }
}

export class IconOutlineShortText extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z"/></svg>`;
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
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z"/></svg>`;
  }
}

export class IconTwotoneShortText extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 9h16v2H4zm0 4h10v2H4z"/></svg>`;
  }
}