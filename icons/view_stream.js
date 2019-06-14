import {
  Icon
} from '../src/icon';

export class IconBaselineViewStream extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }
}

export class IconOutlineViewStream extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4 6v12h17V6H4zm15 10H6v-3h13v3zM6 11V8h13v3H6z"/></svg>`;
  }
}

export class IconRoundViewStream extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M5 18h15c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zM4 6v4c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1z"/></svg>`;
  }
}

export class IconSharpViewStream extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/></svg>`;
  }
}

export class IconTwotoneViewStream extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M6 13h13v3H6zm0-5h13v3H6z" opacity=".3"/><path d="M4 6v12h17V6H4zm15 10H6v-3h13v3zm0-5H6V8h13v3z"/></svg>`;
  }
}