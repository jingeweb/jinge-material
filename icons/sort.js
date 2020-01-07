import {
  Icon
} from '../src/icon';

export class IconBaselineSort extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }
}

const __svg_IconOutlinedSort = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/></svg>`;

export class IconOutlinedSort extends Icon {
  get svg() {
    return __svg_IconOutlinedSort;
  }
}

export class IconRoundSort extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4 18h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm1 6h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>`;
  }
}

export class IconSharpSort extends Icon {
  get svg() {
    return __svg_IconOutlinedSort;
  }
}

export class IconTwotoneSort extends Icon {
  get svg() {
    return __svg_IconOutlinedSort;
  }
}