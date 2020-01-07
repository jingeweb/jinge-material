import {
  Icon
} from '../src/icon';

const __svg_IconBaselineBrowserNotSupported = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M19,6v10.5l1.95,1.95C20.98,18.3,21,18.15,21,18V6c0-1.1-0.9-2-2-2H6.5l2,2H19z"/><path d="M3.22,3.32L1.95,4.59L3,5.64L3,18c0,1.1,0.9,2,2,2h12.36l2.06,2.06l1.27-1.27L3.22,3.32z M15,18H5V7.64L15.36,18H15z"/></g></g></svg>`;

export class IconBaselineBrowserNotSupported extends Icon {
  get svg() {
    return __svg_IconBaselineBrowserNotSupported;
  }
}

export class IconOutlinedBrowserNotSupported extends Icon {
  get svg() {
    return __svg_IconBaselineBrowserNotSupported;
  }
}

export class IconRoundBrowserNotSupported extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M19,6v10.5l1.95,1.95C20.98,18.3,21,18.15,21,18V6c0-1.1-0.9-2-2-2H6.5l2,2H19z"/><path d="M3.86,3.95c-0.35-0.35-0.92-0.35-1.27,0c-0.35,0.35-0.35,0.92,0,1.27L3,5.64L3,18c0,1.1,0.9,2,2,2h12.36l1.42,1.42 c0.35,0.35,0.92,0.35,1.27,0c0.35-0.35,0.35-0.92,0-1.27L3.86,3.95z M5,18V7.64L15.36,18H5z"/></g></g></svg>`;
  }
}

export class IconSharpBrowserNotSupported extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="19,6 19,16.5 21,18.5 21,4 6.5,4 8.5,6"/><path d="M3.22,3.32L1.95,4.59L3,5.64L3,20h14.36l2.06,2.06l1.27-1.27L3.22,3.32z M15,18H5V7.64L15.36,18H15z"/></g></g></svg>`;
  }
}

export class IconTwotoneBrowserNotSupported extends Icon {
  get svg() {
    return __svg_IconBaselineBrowserNotSupported;
  }
}