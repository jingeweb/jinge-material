import {
  Icon
} from '../src/icon';

const __svg_IconBaselineMenu = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;

export class IconBaselineMenu extends Icon {
  get svg() {
    return __svg_IconBaselineMenu;
  }
}

export class IconOutlinedMenu extends Icon {
  get svg() {
    return __svg_IconBaselineMenu;
  }
}

export class IconRoundMenu extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>`;
  }
}

export class IconSharpMenu extends Icon {
  get svg() {
    return __svg_IconBaselineMenu;
  }
}

export class IconTwotoneMenu extends Icon {
  get svg() {
    return __svg_IconBaselineMenu;
  }
}