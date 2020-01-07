import {
  Icon
} from '../src/icon';

export class IconBaselineDetails extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"/></svg>`;
  }
}

const __svg_IconOutlinedDetails = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"/></svg>`;

export class IconOutlinedDetails extends Icon {
  get svg() {
    return __svg_IconOutlinedDetails;
  }
}

export class IconRoundDetails extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3.84 5.49l7.29 12.96c.38.68 1.36.68 1.74 0l7.29-12.96c.38-.67-.11-1.49-.87-1.49H4.71c-.76 0-1.25.82-.87 1.49zM6.38 6h11.25L12 16 6.38 6z"/></svg>`;
  }
}

export class IconSharpDetails extends Icon {
  get svg() {
    return __svg_IconOutlinedDetails;
  }
}

export class IconTwotoneDetails extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path opacity=".3" d="M6.38 6L12 16l5.63-10z"/><path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"/></svg>`;
  }
}