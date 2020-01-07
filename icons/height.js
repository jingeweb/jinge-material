import {
  Icon
} from '../src/icon';

const __svg_IconBaselineHeight = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g/><polygon points="13,6.99 16,6.99 12,3 8,6.99 11,6.99 11,17.01 8,17.01 12,21 16,17.01 13,17.01"/></g></svg>`;

export class IconBaselineHeight extends Icon {
  get svg() {
    return __svg_IconBaselineHeight;
  }
}

export class IconOutlinedHeight extends Icon {
  get svg() {
    return __svg_IconBaselineHeight;
  }
}

export class IconRoundHeight extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><path d="M13,6.99h1.79c0.45,0,0.67-0.54,0.35-0.85l-2.79-2.78c-0.2-0.19-0.51-0.19-0.71,0L8.86,6.14C8.54,6.45,8.76,6.99,9.21,6.99 H11v10.02H9.21c-0.45,0-0.67,0.54-0.35,0.85l2.79,2.78c0.2,0.19,0.51,0.19,0.71,0l2.79-2.78c0.32-0.31,0.09-0.85-0.35-0.85H13V6.99 z"/></g></svg>`;
  }
}

export class IconSharpHeight extends Icon {
  get svg() {
    return __svg_IconBaselineHeight;
  }
}

export class IconTwotoneHeight extends Icon {
  get svg() {
    return __svg_IconBaselineHeight;
  }
}