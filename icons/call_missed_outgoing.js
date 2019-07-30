import {
  Icon
} from '../src/icon';

export class IconBaselineCallMissedOutgoing extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><path id="a" d="M24 24H0V0h24v24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"/></svg>`;
  }
}

const __svg_IconOutlineCallMissedOutgoing = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"/></svg>`;

export class IconOutlineCallMissedOutgoing extends Icon {
  get svg() {
    return __svg_IconOutlineCallMissedOutgoing;
  }
}

export class IconRoundCallMissedOutgoing extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.7 9.11l7.59 7.59c.39.39 1.02.39 1.41 0l6.3-6.3V14c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1h3.59L12 14.59 5.11 7.7c-.39-.39-1.02-.39-1.41 0-.38.39-.38 1.03 0 1.41z"/></svg>`;
  }
}

export class IconSharpCallMissedOutgoing extends Icon {
  get svg() {
    return __svg_IconOutlineCallMissedOutgoing;
  }
}

export class IconTwotoneCallMissedOutgoing extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z"/></svg>`;
  }
}