import {
  Icon
} from '../src/icon';

export class IconBaselineMenuOpen extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"/></svg>`;
  }
}

const __svg_IconOutlinedMenuOpen = `
<svg width="24px" height="24px" viewBox="0 0 24 24">
<path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"/>
</svg>
`;

export class IconOutlinedMenuOpen extends Icon {
  get svg() {
    return __svg_IconOutlinedMenuOpen;
  }
}

export class IconRoundMenuOpen extends Icon {
  get svg() {
    return `
<svg width="24px" height="24px" viewBox="0 0 24 24">
<path d="M4,18h11c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,17.55,3.45,18,4,18z M4,13h8c0.55,0,1-0.45,1-1v0
	c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,12.55,3.45,13,4,13z M3,7L3,7c0,0.55,0.45,1,1,1h11c0.55,0,1-0.45,1-1v0
	c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z M20.3,14.88L17.42,12l2.88-2.88c0.39-0.39,0.39-1.02,0-1.41l0,0
	c-0.39-0.39-1.02-0.39-1.41,0l-3.59,3.59c-0.39,0.39-0.39,1.02,0,1.41l3.59,3.59c0.39,0.39,1.02,0.39,1.41,0l0,0
	C20.68,15.91,20.69,15.27,20.3,14.88z"/>
<path fill="none" d="M0,0h24v24H0V0z"/>
</svg>
`;
  }
}

export class IconSharpMenuOpen extends Icon {
  get svg() {
    return __svg_IconOutlinedMenuOpen;
  }
}

export class IconTwotoneMenuOpen extends Icon {
  get svg() {
    return __svg_IconOutlinedMenuOpen;
  }
}