import {
  Icon
} from '../src/icon';

export class IconBaselineHorizontalRule extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" fill-rule="evenodd" height="24" width="24"/><rect fill-rule="evenodd" height="2" width="16" x="4" y="11"/></g></svg>`;
  }
}

const __svg_IconOutlinedHorizontalRule = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" fill-rule="evenodd" height="24" width="24"/><g><rect fill-rule="evenodd" height="2" width="16" x="4" y="11"/></g></g></svg>`;

export class IconOutlinedHorizontalRule extends Icon {
  get svg() {
    return __svg_IconOutlinedHorizontalRule;
  }
}

export class IconRoundHorizontalRule extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" fill-rule="evenodd" height="24" width="24"/><g><path d="M19,13H5c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h14c0.55,0,1,0.45,1,1v0 C20,12.55,19.55,13,19,13z" fill-rule="evenodd"/></g></g></svg>`;
  }
}

export class IconSharpHorizontalRule extends Icon {
  get svg() {
    return __svg_IconOutlinedHorizontalRule;
  }
}

export class IconTwotoneHorizontalRule extends Icon {
  get svg() {
    return __svg_IconOutlinedHorizontalRule;
  }
}