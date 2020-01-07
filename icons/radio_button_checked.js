import {
  Icon
} from '../src/icon';

export class IconBaselineRadioButtonChecked extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`;
  }
}

const __svg_IconOutlinedRadioButtonChecked = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg>`;

export class IconOutlinedRadioButtonChecked extends Icon {
  get svg() {
    return __svg_IconOutlinedRadioButtonChecked;
  }
}

export class IconRoundRadioButtonChecked extends Icon {
  get svg() {
    return __svg_IconOutlinedRadioButtonChecked;
  }
}

export class IconSharpRadioButtonChecked extends Icon {
  get svg() {
    return __svg_IconOutlinedRadioButtonChecked;
  }
}

export class IconTwotoneRadioButtonChecked extends Icon {
  get svg() {
    return __svg_IconOutlinedRadioButtonChecked;
  }
}