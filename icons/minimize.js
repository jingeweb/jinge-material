import {
  Icon
} from '../src/icon';

export class IconBaselineMinimize extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19h12v2H6z"/></svg>`;
  }
}

const __svg_IconOutlineMinimize = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19h12v2H6v-2z"/></svg>`;

export class IconOutlineMinimize extends Icon {
  get svg() {
    return __svg_IconOutlineMinimize;
  }
}

export class IconRoundMinimize extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 19h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z"/></svg>`;
  }
}

export class IconSharpMinimize extends Icon {
  get svg() {
    return __svg_IconOutlineMinimize;
  }
}

export class IconTwotoneMinimize extends Icon {
  get svg() {
    return __svg_IconOutlineMinimize;
  }
}