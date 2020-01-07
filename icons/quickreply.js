import {
  Icon
} from '../src/icon';

export class IconBaselineQuickreply extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M22,4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-8h7V4z"/></g><g><polygon points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23"/></g></g></g></svg>`;
  }
}

export class IconOutlinedQuickreply extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M4,17.17V4h16v6h2V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-2H5.17L4,17.17z"/></g><g><polygon points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23"/></g></g></g></svg>`;
  }
}

export class IconRoundQuickreply extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M22,4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-7c0-0.55,0.45-1,1-1h6V4z"/></g><g><path d="M21.69,16H20.3l1.4-3.3c0.14-0.33-0.1-0.7-0.46-0.7H17.5c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5H19v3.94 c0,0.26,0.36,0.35,0.47,0.11l2.66-5.33C22.3,16.39,22.06,16,21.69,16z"/></g></g></g></svg>`;
  }
}

export class IconSharpQuickreply extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><polygon points="22,2 2,2 2,22 6,18 15,18 15,10 22,10"/></g><g><polygon points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23"/></g></g></g></svg>`;
  }
}

export class IconTwotoneQuickreply extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><g opacity=".3"><polygon points="4,4 4,17.17 5.17,16 15,16 15,10 20,10 20,4"/></g><path d="M5.17,16L4,17.17V4h16v6h2V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-2H5.17z"/></g><g><polygon points="19,23 22.5,16 20.3,16 22,12 17,12 17,18 19,18"/></g></g></g></svg>`;
  }
}