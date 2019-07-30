import {
  Icon
} from '../src/icon';

export class IconBaselineCropLandscape extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"/></svg>`;
  }
}

const __svg_IconOutlineCropLandscape = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"/></svg>`;

export class IconOutlineCropLandscape extends Icon {
  get svg() {
    return __svg_IconOutlineCropLandscape;
  }
}

export class IconRoundCropLandscape extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 12H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1z"/></svg>`;
  }
}

export class IconSharpCropLandscape extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 5H3v14h18V5zm-2 12H5V7h14v10z"/></svg>`;
  }
}

export class IconTwotoneCropLandscape extends Icon {
  get svg() {
    return __svg_IconOutlineCropLandscape;
  }
}