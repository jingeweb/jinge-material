import {
  Icon
} from '../src/icon';

export class IconBaselineDehaze extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"/></svg>`;
  }
}

const __svg_IconOutlinedDehaze = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"/></svg>`;

export class IconOutlinedDehaze extends Icon {
  get svg() {
    return __svg_IconOutlinedDehaze;
  }
}

export class IconRoundDehaze extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1zm0-5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1zm0-5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1z"/></svg>`;
  }
}

export class IconSharpDehaze extends Icon {
  get svg() {
    return __svg_IconOutlinedDehaze;
  }
}

export class IconTwotoneDehaze extends Icon {
  get svg() {
    return __svg_IconOutlinedDehaze;
  }
}