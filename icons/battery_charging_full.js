import {
  Icon
} from '../src/icon';

const __svg_IconBaselineBatteryChargingFull = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/></svg>`;

export class IconBaselineBatteryChargingFull extends Icon {
  get svg() {
    return __svg_IconBaselineBatteryChargingFull;
  }
}

export class IconOutlinedBatteryChargingFull extends Icon {
  get svg() {
    return __svg_IconBaselineBatteryChargingFull;
  }
}

export class IconRoundBatteryChargingFull extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zm-1.06 9.24l-2.67 5c-.24.45-.94.28-.94-.24v-3.5H9.83c-.38 0-.62-.4-.44-.74l2.67-5c.24-.45.94-.28.94.24v3.5h1.17c.37 0 .62.4.44.74z"/></svg>`;
  }
}

export class IconSharpBatteryChargingFull extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 4h-3V2h-4v2H7v18h10V4zm-6 16v-5.5H9L13 7v5.5h2L11 20z"/></svg>`;
  }
}

export class IconTwotoneBatteryChargingFull extends Icon {
  get svg() {
    return __svg_IconBaselineBatteryChargingFull;
  }
}