import {
  Icon
} from '../src/icon';

const __svg_IconBaselineAmpStories = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><rect height="15" width="10" x="7" y="4"/><rect height="11" width="2" x="3" y="6"/><rect height="11" width="2" x="19" y="6"/></g></g></svg>`;

export class IconBaselineAmpStories extends Icon {
  get svg() {
    return __svg_IconBaselineAmpStories;
  }
}

export class IconOutlinedAmpStories extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M7,19h10V4H7V19z M9,6h6v11H9V6z"/><rect height="11" width="2" x="3" y="6"/><rect height="11" width="2" x="19" y="6"/></g></g></svg>`;
  }
}

export class IconRoundAmpStories extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M16,4H8C7.45,4,7,4.45,7,5v13c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V5C17,4.45,16.55,4,16,4z"/><path d="M4,6C3.45,6,3,6.45,3,7v9c0,0.55,0.45,1,1,1s1-0.45,1-1V7C5,6.45,4.55,6,4,6z"/><path d="M20,6c-0.55,0-1,0.45-1,1v9c0,0.55,0.45,1,1,1s1-0.45,1-1V7C21,6.45,20.55,6,20,6z"/></g></g></svg>`;
  }
}

export class IconSharpAmpStories extends Icon {
  get svg() {
    return __svg_IconBaselineAmpStories;
  }
}

export class IconTwotoneAmpStories extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><g opacity=".3"><rect height="11" width="6" x="9" y="6"/></g><path d="M7,19h10V4H7V19z M9,6h6v11H9V6z"/><rect height="11" width="2" x="3" y="6"/><rect height="11" width="2" x="19" y="6"/></g></g></svg>`;
  }
}