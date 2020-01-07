import {
  Icon
} from '../src/icon';

export class IconBaselineTransform extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z"/></svg>`;
  }
}

export class IconOutlinedTransform extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z"/></svg>`;
  }
}

export class IconRoundTransform extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M21 16H9c-.55 0-1-.45-1-1V4h.79c.45 0 .67-.54.35-.85l-1.79-1.8c-.2-.2-.51-.2-.71 0l-1.79 1.8c-.31.31-.09.85.36.85H6v2H3c-.55 0-1 .45-1 1s.45 1 1 1h3v8c0 1.1.9 2 2 2h8v2h-.79c-.45 0-.67.54-.35.85l1.79 1.79c.2.2.51.2.71 0l1.79-1.79c.32-.31.09-.85-.35-.85H18v-2h3c.55 0 1-.45 1-1s-.45-1-1-1zm-5-2h2V8c0-1.1-.9-2-2-2h-6v2h5c.55 0 1 .45 1 1v5z"/></svg>`;
  }
}

export class IconSharpTransform extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v10h10v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V6h-8v2z"/></svg>`;
  }
}

export class IconTwotoneTransform extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M8 4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4v-2H8V4zm10 10V8c0-1.1-.9-2-2-2h-6v2h6v6h2z"/></svg>`;
  }
}