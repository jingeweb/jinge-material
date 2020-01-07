import {
  Icon
} from '../src/icon';

const __svg_IconBaselineChatBubbleOutline = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;

export class IconBaselineChatBubbleOutline extends Icon {
  get svg() {
    return __svg_IconBaselineChatBubbleOutline;
  }
}

export class IconOutlinedChatBubbleOutline extends Icon {
  get svg() {
    return __svg_IconBaselineChatBubbleOutline;
  }
}

export class IconRoundChatBubbleOutline extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14H6l-2 2V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"/></svg>`;
  }
}

export class IconSharpChatBubbleOutline extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M22 2H2v20l4-4h16V2zm-2 14H6l-2 2V4h16v12z"/></svg>`;
  }
}

export class IconTwotoneChatBubbleOutline extends Icon {
  get svg() {
    return __svg_IconBaselineChatBubbleOutline;
  }
}