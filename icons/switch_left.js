import {
  Icon
} from '../src/icon';

const __svg_IconBaselineSwitchLeft = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect fill="none" height="24" width="24"/><path d="M8.5,8.62v6.76L5.12,12L8.5,8.62 M10,5l-7,7l7,7V5L10,5z M14,5v14l7-7L14,5z"/></svg>`;

export class IconBaselineSwitchLeft extends Icon {
  get svg() {
    return __svg_IconBaselineSwitchLeft;
  }
}

export class IconOutlinedSwitchLeft extends Icon {
  get svg() {
    return __svg_IconBaselineSwitchLeft;
  }
}

export class IconRoundSwitchLeft extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect fill="none" height="24" width="24"/><path d="M8.5,8.62v6.76L5.12,12L8.5,8.62 M3.71,11.29c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59C8.92,17.92,10,17.48,10,16.59V7.41 c0-0.89-1.08-1.34-1.71-0.71L3.71,11.29z M14,7.41v9.17c0,0.89,1.08,1.34,1.71,0.71l4.59-4.59c0.39-0.39,0.39-1.02,0-1.41 l-4.59-4.59C15.08,6.08,14,6.52,14,7.41z"/></svg>`;
  }
}

export class IconSharpSwitchLeft extends Icon {
  get svg() {
    return __svg_IconBaselineSwitchLeft;
  }
}

export class IconTwotoneSwitchLeft extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect fill="none" height="24" width="24"/><polyline opacity=".3" points="8.5,8.62 8.5,15.38 5.12,12 8.5,8.62"/><path d="M8.5,8.62v6.76L5.12,12L8.5,8.62 M10,5l-7,7l7,7V5L10,5z M14,5v14l7-7L14,5z"/></svg>`;
  }
}