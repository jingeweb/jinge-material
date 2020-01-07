import {
  Icon
} from '../src/icon';

const __svg_IconBaselineDoubleArrow = `
<svg height="24px" viewBox="0 0 24 24">
<g id="Bounding_Box">
</g>
<g id="Master">
	<g>
		<polygon points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12 		"/>
		<polygon points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12 		"/>
	</g>
</g>
</svg>
`;

export class IconBaselineDoubleArrow extends Icon {
  get svg() {
    return __svg_IconBaselineDoubleArrow;
  }
}

export class IconOutlinedDoubleArrow extends Icon {
  get svg() {
    return __svg_IconBaselineDoubleArrow;
  }
}

export class IconRoundDoubleArrow extends Icon {
  get svg() {
    return `
<svg height="24px" viewBox="0 0 24 24">
<g id="Bounding_Box">
	<rect fill="none" width="24" height="24"/>
</g>
<g id="Master">
	<g>
		<path d="M20.08,11.42l-4.04-5.65C15.7,5.29,15.15,5,14.56,5h0c-1.49,0-2.35,1.68-1.49,2.89L16,12l-2.93,4.11
			c-0.87,1.21,0,2.89,1.49,2.89h0c0.59,0,1.15-0.29,1.49-0.77l4.04-5.65C20.33,12.23,20.33,11.77,20.08,11.42z"/>
		<path d="M13.08,11.42L9.05,5.77C8.7,5.29,8.15,5,7.56,5h0C6.07,5,5.2,6.68,6.07,7.89L9,12l-2.93,4.11C5.2,17.32,6.07,19,7.56,19h0
			c0.59,0,1.15-0.29,1.49-0.77l4.04-5.65C13.33,12.23,13.33,11.77,13.08,11.42z"/>
	</g>
</g>
</svg>
`;
  }
}

export class IconSharpDoubleArrow extends Icon {
  get svg() {
    return __svg_IconBaselineDoubleArrow;
  }
}

export class IconTwotoneDoubleArrow extends Icon {
  get svg() {
    return __svg_IconBaselineDoubleArrow;
  }
}