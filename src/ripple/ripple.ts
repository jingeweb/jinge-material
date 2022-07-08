import { Component, __, vm, isBoolean, uid, isObject, Attributes } from 'jinge';

import _tpl from './ripple.html';

type Evt = { _event: MouseEvent & TouchEvent };
export interface RippleAttrs {
  active: boolean | Evt;
  disabled: boolean;
  centered?: boolean;
  class?: string;
  eventTrigger?: boolean;
}
export class Ripple extends Component {
  static template = _tpl;

  __active: RippleAttrs['active'];
  disabled: boolean;
  centered: boolean;
  ripples: { uuid: string; waveStyles: Record<string, string | number> }[];
  _eventTrigger: boolean;
  _touchTimeout: number | null;
  _eventType: string | null;

  constructor(attrs: Attributes<RippleAttrs>) {
    super(attrs);
    this.active = attrs.active;
    this.disabled = attrs.disabled;
    this.centered = attrs.centered;
    this.ripples = vm([]);
    this._eventTrigger = attrs.eventTrigger !== false;
    this._touchTimeout = null;
    this._eventType = null;
  }

  get active() {
    return this.__active;
  }

  set active(v) {
    if (this.__active === v) return;
    this.__active = v;
    let isBool = isBoolean(v);
    if (!isBool) {
      if (!isObject(v)) {
        isBool = true;
        v = !!v;
      }
    }
    if (isBool && this.centered && v) {
      this.startRipple({
        type: 'mousedown',
      } as MouseEvent & TouchEvent);
    } else if (!isBool && v && (v as Evt)._event) {
      this.startRipple((v as Evt)._event);
      // } else if (
      //   !isBool && (v as Evt)?._event &&
      //   (v as Evt)._event.constructor
      //     .toString()
      //     .match(/function (\w*)/)[1]
      //     .toLowerCase() === 'mouseevent'
      // ) {
      //   this.startRipple(v);
    }

    this.__notify('update.active', false);
  }

  touchMoveCheck() {
    this._touchTimeout && clearTimeout(this._touchTimeout);
  }

  touchStartCheck($event: TouchEvent) {
    this._touchTimeout = window.setTimeout(() => {
      this.startRipple.bind(this, $event);
    }, 100);
  }

  startRipple($event: MouseEvent & TouchEvent) {
    const { _eventType, disabled, centered } = this;

    if (!disabled && (!_eventType || _eventType === $event.type)) {
      const size = this.getSize();
      let position: Record<string, string>;

      if (centered) {
        position = this.getCenteredPosition(size);
      } else {
        position = this.getHitPosition($event, size);
      }

      this._eventType = $event.type;
      this.ripples.push(
        vm({
          waveStyles: this.applyStyles(position, size),
          uuid: uid(),
        }),
      );
    }
  }

  applyStyles(position: Record<string, string>, size: number) {
    return {
      width: size,
      height: size,
      ...position,
    };
  }

  clearWave(uuid: string) {
    if (!uuid) {
      this.ripples.length = 0;
      return;
    }
    const idx = this.ripples.findIndex((ripple) => ripple.uuid === uuid);
    if (idx < 0) return;
    this.ripples.splice(idx, 1);
  }

  getSize() {
    const { offsetWidth, offsetHeight } = this[__].rootNodes[0] as HTMLElement;

    return Math.round(Math.max(offsetWidth, offsetHeight));
  }

  getCenteredPosition(size: number) {
    const halfSize = -size / 2 + 'px';

    return {
      'margin-top': halfSize,
      'margin-left': halfSize,
    };
  }

  getHitPosition($event: MouseEvent & TouchEvent, elementSize: number) {
    const rect = (this[__].rootNodes[0] as HTMLElement).getBoundingClientRect();
    let top = $event.pageY;
    let left = $event.pageX;

    if ($event.type === 'touchstart') {
      top = $event.changedTouches[0].pageY;
      left = $event.changedTouches[0].pageX;
    }

    return {
      top: top - rect.top - elementSize / 2 - document.documentElement.scrollTop + 'px',
      left: left - rect.left - elementSize / 2 - document.documentElement.scrollLeft + 'px',
    };
  }
}
