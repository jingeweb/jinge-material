import {
  Icon
} from '../src/icon';

export class IconBaselinePolymer extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"/></svg>`;
  }
}

const __svg_IconOutlinedPolymer = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8L19 4z"/></svg>`;

export class IconOutlinedPolymer extends Icon {
  get svg() {
    return __svg_IconOutlinedPolymer;
  }
}

export class IconRoundPolymer extends Icon {
  get svg() {
    return __svg_IconOutlinedPolymer;
  }
}

export class IconSharpPolymer extends Icon {
  get svg() {
    return __svg_IconOutlinedPolymer;
  }
}

export class IconTwotonePolymer extends Icon {
  get svg() {
    return __svg_IconOutlinedPolymer;
  }
}