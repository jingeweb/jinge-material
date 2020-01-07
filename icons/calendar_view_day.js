import {
  Icon
} from '../src/icon';

export class IconBaselineCalendarViewDay extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z"/><path fill="none" d="M0 0h24v24H0z"/></svg>`;
  }
}

export class IconOutlinedCalendarViewDay extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z"/></svg>`;
  }
}

export class IconRoundCalendarViewDay extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4 17h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zm0-7h16c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1zm0-4h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z"/></svg>`;
  }
}

export class IconSharpCalendarViewDay extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-4h18v2H3V6z"/></svg>`;
  }
}

export class IconTwotoneCalendarViewDay extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z"/><path opacity=".3" d="M5 12h14v1H5z"/></svg>`;
  }
}