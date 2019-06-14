import {
  Icon
} from '../src/icon';

export class IconBaselineCallReceived extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/></svg>`;
  }
}

const __svg_IconOutlineCallReceived = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41z"/></svg>`;

export class IconOutlineCallReceived extends Icon {
  get svg() {
    return __svg_IconOutlineCallReceived;
  }
}

export class IconRoundCallReceived extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19.3 4.71c-.39-.39-1.02-.39-1.41 0L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8.41L19.3 6.11c.38-.38.38-1.02 0-1.4z"/></svg>`;
  }
}

export class IconSharpCallReceived extends Icon {
  get svg() {
    return __svg_IconOutlineCallReceived;
  }
}

export class IconTwotoneCallReceived extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15 17H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"/></svg>`;
  }
}