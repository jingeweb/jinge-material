import {
  Icon
} from '../src/icon';

export class IconBaselineLooks extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z"/></svg>`;
  }
}

const __svg_IconOutlineLooks = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z"/></svg>`;

export class IconOutlineLooks extends Icon {
  get svg() {
    return __svg_IconOutlineLooks;
  }
}

export class IconRoundLooks extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10c-3.47 0-6.36 2.54-6.91 5.86-.1.6.39 1.14 1 1.14.49 0 .9-.36.98-.85C7.48 13.79 9.53 12 12 12s4.52 1.79 4.93 4.15c.08.49.49.85.98.85.61 0 1.09-.54.99-1.14C18.36 12.54 15.47 10 12 10zm0-4C6.3 6 1.61 10.34 1.05 15.9c-.05.59.41 1.1 1.01 1.1.51 0 .94-.38.99-.88C3.49 11.57 7.34 8 12 8s8.51 3.57 8.96 8.12c.05.5.48.88.99.88.59 0 1.06-.51 1-1.1C22.39 10.34 17.7 6 12 6z"/></svg>`;
  }
}

export class IconSharpLooks extends Icon {
  get svg() {
    return __svg_IconOutlineLooks;
  }
}

export class IconTwotoneLooks extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11zm0 6c2.76 0 5 2.24 5 5h2c0-3.86-3.14-7-7-7s-7 3.14-7 7h2c0-2.76 2.24-5 5-5z"/></svg>`;
  }
}