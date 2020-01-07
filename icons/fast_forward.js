import {
  Icon
} from '../src/icon';

export class IconBaselineFastForward extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }
}

export class IconOutlinedFastForward extends Icon {
  get svg() {
    return `
<svg height="24px" viewBox="0 0 24 24">
<g id="Bounding_Boxes">
	<rect fill="none" width="24" height="24"/>
	<rect fill="none" width="24" height="24"/>
</g>
<g id="Outline">
	<g id="ui_x5F_spec_x5F_header">
	</g>
	<path d="M15,9.86L18.03,12L15,14.14V9.86 M6,9.86L9.03,12L6,14.14V9.86 M13,6v12l8.5-6L13,6L13,6z M4,6v12l8.5-6L4,6L4,6z"/>
</g>
</svg>
`;
  }
}

export class IconRoundFastForward extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82zM13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81z"/></svg>`;
  }
}

export class IconSharpFastForward extends Icon {
  get svg() {
    return `
<svg height="24px" viewBox="0 0 24 24">
<g id="Bounding_Boxes">
	<rect fill="none" width="24" height="24"/>
	<rect fill="none" width="24" height="24"/>
</g>
<g id="Sharp">
	<path d="M4,18l8.5-6L4,6V18z M13,6v12l8.5-6L13,6z"/>
</g>
</svg>
`;
  }
}

export class IconTwotoneFastForward extends Icon {
  get svg() {
    return `
<svg height="24px" viewBox="0 0 24 24">
<g id="Bounding_Boxes">
	<rect fill="none" width="24" height="24"/>
	<rect fill="none" width="24" height="24"/>
</g>
<g id="Duotone">
	<g id="ui_x5F_spec_x5F_header_copy">
	</g>
	<g>
		<polygon opacity="0.3" points="15,9.86 15,14.14 18.03,12 		"/>
		<polygon opacity="0.3" points="6,9.86 6,14.14 9.03,12 		"/>
		<path d="M4,18l8.5-6L4,6V18z M6,9.86L9.03,12L6,14.14V9.86z"/>
		<path d="M21.5,12L13,6v12L21.5,12z M15,9.86L18.03,12L15,14.14V9.86z"/>
	</g>
</g>
</svg>
`;
  }
}