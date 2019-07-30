import {
  Icon
} from '../src/icon';

export class IconBaselineArrowDropUp extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }
}

const __svg_IconOutlineArrowDropUp = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5H7z"/></svg>`;

export class IconOutlineArrowDropUp extends Icon {
  get svg() {
    return __svg_IconOutlineArrowDropUp;
  }
}

export class IconRoundArrowDropUp extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.71 12.29L11.3 9.7c.39-.39 1.02-.39 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"/></svg>`;
  }
}

export class IconSharpArrowDropUp extends Icon {
  get svg() {
    return __svg_IconOutlineArrowDropUp;
  }
}

export class IconTwotoneArrowDropUp extends Icon {
  get svg() {
    return __svg_IconOutlineArrowDropUp;
  }
}