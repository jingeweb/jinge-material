import {
  Icon
} from '../src/icon';

const __svg_IconBaselinePause = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;

export class IconBaselinePause extends Icon {
  get svg() {
    return __svg_IconBaselinePause;
  }
}

export class IconOutlinedPause extends Icon {
  get svg() {
    return __svg_IconBaselinePause;
  }
}

export class IconRoundPause extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"/></svg>`;
  }
}

export class IconSharpPause extends Icon {
  get svg() {
    return __svg_IconBaselinePause;
  }
}

export class IconTwotonePause extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>`;
  }
}