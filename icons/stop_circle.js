import {
  Icon
} from '../src/icon';

const __svg_IconBaselineStopCircle = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M8,16h8V8H8V16z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2L12,2z" fill-rule="evenodd"/></g></svg>`;

export class IconBaselineStopCircle extends Icon {
  get svg() {
    return __svg_IconBaselineStopCircle;
  }
}

export class IconOutlinedStopCircle extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g><rect height="8" width="8" x="8" y="8"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z"/></g></g></svg>`;
  }
}

export class IconRoundStopCircle extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><path d="M9,16h6c0.55,0,1-0.45,1-1V9c0-0.55-0.45-1-1-1H9C8.45,8,8,8.45,8,9v6 C8,15.55,8.45,16,9,16z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2L12,2z" fill-rule="evenodd"/></g></svg>`;
  }
}

export class IconSharpStopCircle extends Icon {
  get svg() {
    return __svg_IconBaselineStopCircle;
  }
}

export class IconTwotoneStopCircle extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8c4.41,0,8-3.59,8-8C20,7.59,16.41,4,12,4z M16,16H8V8h8V16z" opacity=".3"/><rect height="8" width="8" x="8" y="8"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 c4.41,0,8,3.59,8,8C20,16.41,16.41,20,12,20z"/></g></g></svg>`;
  }
}