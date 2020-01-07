import {
  Icon
} from '../src/icon';

const __svg_IconBaselineViewArray = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"/></svg>`;

export class IconBaselineViewArray extends Icon {
  get svg() {
    return __svg_IconBaselineViewArray;
  }
}

export class IconOutlinedViewArray extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 7v9h-5V7h5m6-2h-3v13h3V5zm-4 0H8v13h9V5zM7 5H4v13h3V5z"/></svg>`;
  }
}

export class IconRoundViewArray extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 18h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1zM18 6v11c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1zM9 18h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1z"/></svg>`;
  }
}

export class IconSharpViewArray extends Icon {
  get svg() {
    return __svg_IconBaselineViewArray;
  }
}

export class IconTwotoneViewArray extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 5h3v13H4zm14 0h3v13h-3zM8 18h9V5H8v13zm2-11h5v9h-5V7z"/><path d="M10 7h5v9h-5z" opacity=".3"/></svg>`;
  }
}