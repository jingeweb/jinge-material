import {
  Icon
} from '../src/icon';

export class IconBaselineViewColumn extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }
}

export class IconOutlineViewColumn extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 5v13h17V5H4zm10 2v9h-3V7h3zM6 7h3v9H6V7zm13 9h-3V7h3v9z"/></svg>`;
  }
}

export class IconRoundViewColumn extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 18h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1zm-6 0h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1zM16 6v11c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"/></svg>`;
  }
}

export class IconSharpViewColumn extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"/></svg>`;
  }
}

export class IconTwotoneViewColumn extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7h3v9H6zm5 0h3v9h-3zm5 0h3v9h-3z" opacity=".3"/><path d="M4 5v13h17V5H4zm5 11H6V7h3v9zm5 0h-3V7h3v9zm5 0h-3V7h3v9z"/></svg>`;
  }
}