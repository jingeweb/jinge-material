import {
  Icon
} from '../src/icon';

const __svg_IconBaselineTableRows = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/><path d="M22,7H2V2h20V7z M22,9.5H2v5h20V9.5z M22,17H2v5h20V17z"/></g></svg>`;

export class IconBaselineTableRows extends Icon {
  get svg() {
    return __svg_IconBaselineTableRows;
  }
}

export class IconOutlinedTableRows extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><g><rect fill="none" height="24" width="24"/></g><path d="M22,2H2v20h20V2L22,2z M4,8V4h16v4H4L4,8z M4,14v-4h16v4H4L4,14z M4,20v-4h16v4H4L4,20z"/></g></svg>`;
  }
}

export class IconRoundTableRows extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/><path d="M20,7H4C2.9,7,2,6.1,2,5V4c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v1C22,6.1,21.1,7,20,7z M20,9.5H4c-1.1,0-2,0.9-2,2v1 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-1C22,10.4,21.1,9.5,20,9.5z M20,17H4c-1.1,0-2,0.9-2,2v1c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2 v-1C22,17.9,21.1,17,20,17z"/></g></svg>`;
  }
}

export class IconSharpTableRows extends Icon {
  get svg() {
    return __svg_IconBaselineTableRows;
  }
}

export class IconTwotoneTableRows extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><g><rect fill="none" height="24" width="24"/></g><g opacity=".3"><path d="M20,4v4H4V4H20z M20,10v4H4v-4H20z M4,20v-4h16v4H4z"/></g><g><path d="M2,2v20h20V2H2z M20,4v4H4V4H20z M20,10v4H4v-4H20z M4,20v-4h16v4H4z"/></g></g></svg>`;
  }
}