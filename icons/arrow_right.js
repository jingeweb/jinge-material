import {
  Icon
} from '../src/icon';

const __svg_IconBaselineArrowRight = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v10z"/></svg>`;

export class IconBaselineArrowRight extends Icon {
  get svg() {
    return __svg_IconBaselineArrowRight;
  }
}

export class IconOutlinedArrowRight extends Icon {
  get svg() {
    return __svg_IconBaselineArrowRight;
  }
}

export class IconRoundArrowRight extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.71 15.29l2.59-2.59c.39-.39.39-1.02 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"/></svg>`;
  }
}

export class IconSharpArrowRight extends Icon {
  get svg() {
    return __svg_IconBaselineArrowRight;
  }
}

export class IconTwotoneArrowRight extends Icon {
  get svg() {
    return __svg_IconBaselineArrowRight;
  }
}