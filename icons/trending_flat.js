import {
  Icon
} from '../src/icon';

export class IconBaselineTrendingFlat extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 12l-4-4v3H3v2h15v3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }
}

const __svg_IconOutlineTrendingFlat = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M22 12l-4-4v3H3v2h15v3l4-4z"/></svg>`;

export class IconOutlineTrendingFlat extends Icon {
  get svg() {
    return __svg_IconOutlineTrendingFlat;
  }
}

export class IconRoundTrendingFlat extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M21.65 11.65l-2.79-2.79c-.32-.32-.86-.1-.86.35V11H4c-.55 0-1 .45-1 1s.45 1 1 1h14v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z"/></svg>`;
  }
}

export class IconSharpTrendingFlat extends Icon {
  get svg() {
    return __svg_IconOutlineTrendingFlat;
  }
}

export class IconTwotoneTrendingFlat extends Icon {
  get svg() {
    return __svg_IconOutlineTrendingFlat;
  }
}