import {
  Icon
} from '../src/icon';

export class IconBaselineArrowForward extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`;
  }
}

const __svg_IconOutlineArrowForward = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>`;

export class IconOutlineArrowForward extends Icon {
  get svg() {
    return __svg_IconOutlineArrowForward;
  }
}

export class IconRoundArrowForward extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>`;
  }
}

export class IconSharpArrowForward extends Icon {
  get svg() {
    return __svg_IconOutlineArrowForward;
  }
}

export class IconTwotoneArrowForward extends Icon {
  get svg() {
    return __svg_IconOutlineArrowForward;
  }
}