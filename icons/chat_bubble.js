import {
  Icon
} from '../src/icon';

export class IconBaselineChatBubble extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }
}

const __svg_IconOutlineChatBubble = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`;

export class IconOutlineChatBubble extends Icon {
  get svg() {
    return __svg_IconOutlineChatBubble;
  }
}

export class IconRoundChatBubble extends Icon {
  get svg() {
    return __svg_IconOutlineChatBubble;
  }
}

export class IconSharpChatBubble extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2H2v20l4-4h16V2z"/></svg>`;
  }
}

export class IconTwotoneChatBubble extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path opacity=".3" d="M4 18l2-2h14V4H4z"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;
  }
}