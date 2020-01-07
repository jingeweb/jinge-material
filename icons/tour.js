import {
  Icon
} from '../src/icon';

export class IconBaselineTour extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 4H7V2H5v20h2v-8h14l-2-5 2-5zm-6 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/></svg>`;
  }
}

export class IconOutlinedTour extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/><path d="M21,4h-8h-1H7V2H5v2v10v8h2v-8h4h1h9l-2-5L21,4z M17.14,9.74l0.9,2.26H12h-1H7V6h5h1h5.05l-0.9,2.26L16.85,9L17.14,9.74z M14,9c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,7.9,14,9z"/></g></svg>`;
  }
}

export class IconRoundTour extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/><path d="M20.45,5.37C20.71,4.71,20.23,4,19.52,4H13h-1H7V3c0-0.55-0.45-1-1-1h0C5.45,2,5,2.45,5,3v1v10v8h2v-8h4h1h7.52 c0.71,0,1.19-0.71,0.93-1.37L19,9L20.45,5.37z M15,9c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S15,7.9,15,9z"/></g></svg>`;
  }
}

export class IconSharpTour extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24" x="0" y="0"/><path d="M21,4h-8h-1H7V2H5v2v10v8h2v-8h4h1h9l-2-5L21,4z M15,9c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S15,7.9,15,9z"/></g></svg>`;
  }
}

export class IconTwotoneTour extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/><g><polygon opacity=".3" points="7,12 7,6 18.05,6 16.85,9 18.05,12"/><g><path d="M21,4h-8h-1H7V2H5v2v10v8h2v-8h4h1h9l-2-5L21,4z M7,12V6h11.05l-1.2,3l1.2,3H7z M14,9c0,1.1-0.9,2-2,2s-2-0.9-2-2 s0.9-2,2-2S14,7.9,14,9z"/></g></g></g></svg>`;
  }
}