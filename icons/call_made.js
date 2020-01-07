import {
  Icon
} from '../src/icon';

export class IconBaselineCallMade extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/></svg>`;
  }
}

const __svg_IconOutlinedCallMade = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"/></svg>`;

export class IconOutlinedCallMade extends Icon {
  get svg() {
    return __svg_IconOutlinedCallMade;
  }
}

export class IconRoundCallMade extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 6c0 .56.45 1 1 1h5.59L4.7 17.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z"/></svg>`;
  }
}

export class IconSharpCallMade extends Icon {
  get svg() {
    return __svg_IconOutlinedCallMade;
  }
}

export class IconTwotoneCallMade extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.41 20L17 8.41V15h2V5H9v2h6.59L4 18.59z"/></svg>`;
  }
}