import {
  Icon
} from '../src/icon';

export class IconBaselineMaximize extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 3h18v2H3z"/></svg>`;
  }
}

const __svg_IconOutlineMaximize = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 3h18v2H3V3z"/></svg>`;

export class IconOutlineMaximize extends Icon {
  get svg() {
    return __svg_IconOutlineMaximize;
  }
}

export class IconRoundMaximize extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 3h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z"/></svg>`;
  }
}

export class IconSharpMaximize extends Icon {
  get svg() {
    return __svg_IconOutlineMaximize;
  }
}

export class IconTwotoneMaximize extends Icon {
  get svg() {
    return __svg_IconOutlineMaximize;
  }
}