import './card-media-cover.scss';

import {
  Component,
  AFTER_RENDER,
  GET_FIRST_DOM
} from 'jinge';
import {
  createElement
} from 'jinge/dom';

function getImageLightness(image, onLoad, onError) {
  const canvas = createElement('canvas');

  image.crossOrigin = 'Anonymous';

  image.onload = function() {
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const imageMetadata = imageData.data;

    let colorSum = 0;
    for (let x = 0, len = imageMetadata.length; x < len; x += 4) {
      const r = imageMetadata[x];
      const g = imageMetadata[x + 1];
      const b = imageMetadata[x + 2];
      const average = Math.floor((r + g + b) / 3);
      colorSum += average;
    }

    onLoad(Math.floor(colorSum / (this.width * this.height)));
  };

  image.onerror = onError;
}

export class CardMediaCover extends Component {
  static get template() {
    return `
<div class="md-card-media-cover\${textScrim ? ' md-text-scrim' : ''}\${solid ? ' md-solid' : ''}">
  <_slot />
  <if e:expect="textScrim">
  <div
    class="md-card-backdrop"
    style="background: \${backdropBg}"
    ref:backdrop
  ></div>
  </if>
</div>`;
  }

  constructor(attrs) {
    super(attrs);
    this.textScrim = attrs.textScrim;
    this.solid = attrs.solid;
    this.backdropBg = 'inherit';
  }

  applyScrimColor(darkness) {
    this.backdropBg = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, ${darkness /
      2}) 66%, rgba(0, 0, 0, ${darkness}) 100%)`;
  }

  applySolidColor($el, darkness) {
    const area = $el.querySelector('.md-card-area');
    if (!area) return;
    area.style.background = `rgba(0, 0, 0, ${darkness})`;
  }

  [AFTER_RENDER]() {
    const $el = this[GET_FIRST_DOM]();
    const applyBackground = (darkness = 0.6) => {
      if (this.textScrim) {
        this.applyScrimColor(darkness);
      } else if (this.mdSolid) {
        this.applySolidColor($el, darkness);
      }
    };
    const image = $el.querySelector('img');

    if (image && (this.textScrim || this.solid)) {
      getImageLightness(
        image,
        lightness => {
          const limit = 256;
          let darkness =
            ((Math.abs(limit - lightness) * 100) / limit + 15) / 100;

          if (darkness >= 0.7) {
            darkness = 0.7;
          }

          applyBackground(darkness);
        },
        applyBackground
      );
    }
  }
}
