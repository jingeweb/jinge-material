import {
  Icon
} from '../src/icon';

export class IconBaselineTextFormat extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }
}

const __svg_IconOutlinedTextFormat = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"/></svg>`;

export class IconOutlinedTextFormat extends Icon {
  get svg() {
    return __svg_IconOutlinedTextFormat;
  }
}

export class IconRoundTextFormat extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M5 18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1zm4.5-5.2h5l.66 1.6c.15.36.5.6.89.6.69 0 1.15-.71.88-1.34l-3.88-8.97C12.87 4.27 12.46 4 12 4c-.46 0-.87.27-1.05.69l-3.88 8.97c-.27.63.2 1.34.89 1.34.39 0 .74-.24.89-.6l.65-1.6zM12 5.98L13.87 11h-3.74L12 5.98z"/></svg>`;
  }
}

export class IconSharpTextFormat extends Icon {
  get svg() {
    return __svg_IconOutlinedTextFormat;
  }
}

export class IconTwotoneTextFormat extends Icon {
  get svg() {
    return __svg_IconOutlinedTextFormat;
  }
}