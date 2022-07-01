import './card-media-cover.scss';

import { Attributes, Component, createElementWithoutAttrs } from 'jinge';
import _tpl from './card-media-cover.html';

function getImageLightness(image: HTMLImageElement, onLoad: (v: number) => void, onError: (err: unknown) => void) {
  const canvas = createElementWithoutAttrs('canvas') as HTMLCanvasElement;

  image.crossOrigin = 'Anonymous';

  image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);

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

    onLoad(Math.floor(colorSum / (image.width * image.height)));
  };

  image.onerror = onError;
}

export interface CardMediaCoverAttrs {
  textScrim?: boolean;
  solid?: boolean;
}
export class CardMediaCover extends Component {
  static tempalte = _tpl;

  textScrim: boolean;
  solid: boolean;
  backdropBg: string;

  constructor(attrs: Attributes<CardMediaCoverAttrs>) {
    super(attrs);
    this.textScrim = attrs.textScrim;
    this.solid = attrs.solid;
    this.backdropBg = 'inherit';
  }

  applyScrimColor(darkness: number) {
    this.backdropBg = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, ${
      darkness / 2
    }) 66%, rgba(0, 0, 0, ${darkness}) 100%)`;
  }

  applySolidColor($el: HTMLElement, darkness: number) {
    const area = $el.querySelector('.md-card-area') as HTMLElement;
    if (!area) return;
    area.style.background = `rgba(0, 0, 0, ${darkness})`;
  }

  __afterRender() {
    const $el = this.__firstDOM as HTMLElement;
    const applyBackground = (darkness = 0.6) => {
      if (this.textScrim) {
        this.applyScrimColor(darkness);
      } else if (this.solid) {
        this.applySolidColor($el, darkness);
      }
    };
    const image = $el.querySelector('img');

    if (image && (this.textScrim || this.solid)) {
      getImageLightness(
        image,
        (lightness) => {
          const limit = 256;
          let darkness = ((Math.abs(limit - lightness) * 100) / limit + 15) / 100;

          if (darkness >= 0.7) {
            darkness = 0.7;
          }

          applyBackground(darkness);
        },
        applyBackground,
      );
    }
  }
}
