import {
  Icon
} from '../src/icon';

export class IconBaselineArrowRightAlt extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg>`;
  }
}

const __svg_IconOutlineArrowRightAlt = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/></svg>`;

export class IconOutlineArrowRightAlt extends Icon {
  get svg() {
    return __svg_IconOutlineArrowRightAlt;
  }
}

export class IconRoundArrowRightAlt extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z"/></svg>`;
  }
}

export class IconSharpArrowRightAlt extends Icon {
  get svg() {
    return __svg_IconOutlineArrowRightAlt;
  }
}

export class IconTwotoneArrowRightAlt extends Icon {
  get svg() {
    return __svg_IconOutlineArrowRightAlt;
  }
}