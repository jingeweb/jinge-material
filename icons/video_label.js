import {
  Icon
} from '../src/icon';

const __svg_IconBaselineVideoLabel = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"/></svg>`;

export class IconBaselineVideoLabel extends Icon {
  get svg() {
    return __svg_IconBaselineVideoLabel;
  }
}

export class IconOutlinedVideoLabel extends Icon {
  get svg() {
    return __svg_IconBaselineVideoLabel;
  }
}

export class IconRoundVideoLabel extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10z"/></svg>`;
  }
}

export class IconSharpVideoLabel extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 3H1v18h22V3zm-2 13H3V5h18v11z"/></svg>`;
  }
}

export class IconTwotoneVideoLabel extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5h18v11H3z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"/></svg>`;
  }
}