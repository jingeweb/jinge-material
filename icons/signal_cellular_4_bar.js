import {
  Icon
} from '../src/icon';

export class IconBaselineSignalCellular4Bar extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 22h20V2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }
}

const __svg_IconOutlinedSignalCellular4Bar = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M2 22h20V2L2 22z"/></svg>`;

export class IconOutlinedSignalCellular4Bar extends Icon {
  get svg() {
    return __svg_IconOutlinedSignalCellular4Bar;
  }
}

export class IconRoundSignalCellular4Bar extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71z"/></svg>`;
  }
}

export class IconSharpSignalCellular4Bar extends Icon {
  get svg() {
    return __svg_IconOutlinedSignalCellular4Bar;
  }
}

export class IconTwotoneSignalCellular4Bar extends Icon {
  get svg() {
    return __svg_IconOutlinedSignalCellular4Bar;
  }
}