import {
  Icon
} from '../src/icon';

export class IconBaselineWeb extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }
}

export class IconOutlinedWeb extends Icon {
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
	<path d="M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M4,9h10.5v3.5H4V9z M4,14.5
		h10.5V18L4,18V14.5z M20,18l-3.5,0V9H20V18z"/>
</g>
</svg>
`;
  }
}

export class IconRoundWeb extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h10.5v3.5H4V9zm0 5.5h10.5V18H5c-.55 0-1-.45-1-1v-2.5zM19 18h-2.5V9H20v8c0 .55-.45 1-1 1z"/></svg>`;
  }
}

export class IconSharpWeb extends Icon {
  get svg() {
    return `
<svg height="24px" viewBox="0 0 24 24">
<g id="Bounding_Boxes">
	<rect fill="none" width="24" height="24"/>
	<rect fill="none" width="24" height="24"/>
</g>
<g id="Sharp">
	<path d="M22,4H2v16h20V4z M4,9h10.5v3.5H4V9z M4,14.5h10.5V18L4,18V14.5z M20,18l-3.5,0V9H20V18z"/>
</g>
</svg>
`;
  }
}

export class IconTwotoneWeb extends Icon {
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
		<rect x="4" y="9" opacity="0.3" width="10.5" height="3.5"/>
		<rect x="4" y="14.5" opacity="0.3" width="10.5" height="3.5"/>
		<rect x="16.5" y="9" opacity="0.3" width="3.5" height="9"/>
		<path d="M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M14.5,18L4,18v-3.5h10.5
			V18z M14.5,12.5H4V9h10.5V12.5z M20,18l-3.5,0V9H20V18z"/>
	</g>
</g>
</svg>
`;
  }
}