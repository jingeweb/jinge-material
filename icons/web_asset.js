import {
  Icon
} from '../src/icon';

const __svg_IconBaselineWebAsset = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"/></svg>`;

export class IconBaselineWebAsset extends Icon {
  get svg() {
    return __svg_IconBaselineWebAsset;
  }
}

export class IconOutlinedWebAsset extends Icon {
  get svg() {
    return __svg_IconBaselineWebAsset;
  }
}

export class IconRoundWebAsset extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-1 14H6c-.55 0-1-.45-1-1V8h14v9c0 .55-.45 1-1 1z"/></svg>`;
  }
}

export class IconSharpWebAsset extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 4v16h18V4H3zm16 14H5V8h14v10z"/></svg>`;
  }
}

export class IconTwotoneWebAsset extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 8h14v10H5z" opacity=".3"/><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"/></svg>`;
  }
}