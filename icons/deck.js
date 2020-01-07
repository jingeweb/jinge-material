import {
  Icon
} from '../src/icon';

const __svg_IconBaselineDeck = `
<svg height="24px" viewBox="0 0 24 24">
<g id="Bounding_Box">
</g>
<g id="Master">
	<g>
		<polygon points="22,9 12,2 2,9 11,9 11,22 13,22 13,9 		"/>
		<polygon points="4.14,12 2.18,12.37 3,16.74 3,22 5,22 5.02,18 7,18 7,22 9,22 9,16 4.9,16 		"/>
		<polygon points="19.1,16 15,16 15,22 17,22 17,18 18.98,18 19,22 21,22 21,16.74 21.82,12.37 19.86,12 		"/>
	</g>
</g>
</svg>
`;

export class IconBaselineDeck extends Icon {
  get svg() {
    return __svg_IconBaselineDeck;
  }
}

export class IconOutlinedDeck extends Icon {
  get svg() {
    return `
<svg height="24px" viewBox="0 0 24 24">
<g id="Bounding_Box">
</g>
<g id="Master">
	<g>
		<path d="M22,9L12,2L2,9h9v13h2V9H22z M12,4.44L15.66,7H8.34L12,4.44z"/>
		<polygon points="4.14,12 2.18,12.37 3,16.74 3,22 5,22 5.02,18 7,18 7,22 9,22 9,16 4.9,16 		"/>
		<polygon points="19.1,16 15,16 15,22 17,22 17,18 18.98,18 19,22 21,22 21,16.74 21.82,12.37 19.86,12 		"/>
	</g>
</g>
</svg>
`;
  }
}

export class IconRoundDeck extends Icon {
  get svg() {
    return `
<svg height="24px" viewBox="0 0 24 24">
<g id="Bounding_Box">
	<rect fill="none" width="24" height="24"/>
</g>
<g id="Master">
	<g>
		<path d="M20.41,9c0.49,0,0.69-0.63,0.29-0.91L13.15,2.8c-0.69-0.48-1.61-0.48-2.29,0L3.3,8.09C2.9,8.37,3.1,9,3.59,9H11v12
			c0,0.55,0.45,1,1,1s1-0.45,1-1V9H20.41z"/>
		<path d="M8,16H4.9l-0.57-3.02c-0.1-0.54-0.62-0.9-1.17-0.8c-0.54,0.1-0.9,0.62-0.8,1.17L3,16.74V21c0,0.55,0.45,1,1,1h0.01
			c0.55,0,1-0.44,1-0.99L5.02,18H7v3c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C9,16.45,8.55,16,8,16z"/>
		<path d="M20.84,12.18c-0.54-0.1-1.06,0.26-1.17,0.8L19.1,16H16c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1s1-0.45,1-1v-3h1.98
			l0.02,3.01c0,0.55,0.45,0.99,1,0.99H20c0.55,0,1-0.45,1-1v-4.26l0.64-3.39C21.74,12.81,21.38,12.28,20.84,12.18z"/>
	</g>
</g>
</svg>
`;
  }
}

export class IconSharpDeck extends Icon {
  get svg() {
    return __svg_IconBaselineDeck;
  }
}

export class IconTwotoneDeck extends Icon {
  get svg() {
    return `
<svg height="24px" viewBox="0 0 24 24">
<g id="Bounding_Box">
</g>
<g id="Master">
	<g>
		<polygon opacity="0.3" points="12,4.44 8.34,7 15.66,7 		"/>
		<path d="M22,9L12,2L2,9h9v13h2V9H22z M12,4.44L15.66,7H8.34L12,4.44z"/>
		<polygon points="4.14,12 2.18,12.37 3,16.74 3,22 5,22 5.02,18 7,18 7,22 9,22 9,16 4.9,16 		"/>
		<polygon points="19.1,16 15,16 15,22 17,22 17,18 18.98,18 19,22 21,22 21,16.74 21.82,12.37 19.86,12 		"/>
	</g>
</g>
</svg>
`;
  }
}