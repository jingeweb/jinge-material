import {
  Icon
} from '../src/icon';

const __svg_IconBaselineArrowBack = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`;

export class IconBaselineArrowBack extends Icon {
  get svg() {
    return __svg_IconBaselineArrowBack;
  }
}

export class IconOutlinedArrowBack extends Icon {
  get svg() {
    return __svg_IconBaselineArrowBack;
  }
}

export class IconRoundArrowBack extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>`;
  }
}

export class IconSharpArrowBack extends Icon {
  get svg() {
    return __svg_IconBaselineArrowBack;
  }
}

export class IconTwotoneArrowBack extends Icon {
  get svg() {
    return __svg_IconBaselineArrowBack;
  }
}