import {
  Icon
} from '../src/icon';

export class IconBaselinePriorityHigh extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/><path fill="none" d="M0 0h24v24H0z"/></svg>`;
  }
}

const __svg_IconOutlinePriorityHigh = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/></svg>`;

export class IconOutlinePriorityHigh extends Icon {
  get svg() {
    return __svg_IconOutlinePriorityHigh;
  }
}

export class IconRoundPriorityHigh extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><circle cx="12" cy="19" r="2"/><path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>`;
  }
}

export class IconSharpPriorityHigh extends Icon {
  get svg() {
    return __svg_IconOutlinePriorityHigh;
  }
}

export class IconTwotonePriorityHigh extends Icon {
  get svg() {
    return __svg_IconOutlinePriorityHigh;
  }
}