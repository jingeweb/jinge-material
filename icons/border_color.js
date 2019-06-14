import {
  Icon
} from '../src/icon';

export class IconBaselineBorderColor extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z"/><path d="M0 0h24v24H0z" fill="none"/><path fill-opacity=".36" d="M0 20h24v4H0z"/></svg>`;
  }
}

export class IconOutlineBorderColor extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M14 3.25l-10 10V17h3.75l10-10L14 3.25zM6.92 15H6v-.92l8-8 .92.92-8 8zM20.71 4.04c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z"/><path fill-opacity=".36" d="M0 20h24v4H0v-4z"/></svg>`;
  }
}

export class IconRoundBorderColor extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M17.75 7L14 3.25 4.15 13.1c-.1.1-.15.22-.15.36v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.75 7zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z"/><path fill-opacity=".36" d="M2 20h20c1.1 0 2 .9 2 2s-.9 2-2 2H2c-1.1 0-2-.9-2-2s.9-2 2-2z"/></svg>`;
  }
}

export class IconSharpBorderColor extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.75 8L14 4.25l-10 10V18h3.75l10-10zm3.66-3.66L17.66.59 15 3.25 18.75 7l2.66-2.66z"/><path fill-opacity=".36" d="M0 20h24v4H0v-4z"/></svg>`;
  }
}

export class IconTwotoneBorderColor extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill-opacity=".36" d="M14 6.08l-8 8V15h.92l8-8z"/><path d="M14 3.25l-10 10V17h3.75l10-10L14 3.25zM6.92 15H6v-.92l8-8 .92.92-8 8zM20.71 4.04c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z"/><path fill-opacity=".36" d="M0 20h24v4H0v-4z"/></svg>`;
  }
}