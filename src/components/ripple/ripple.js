import {
  Component,
  VM
} from 'jinge';
import {
  setTimeout,
  clearTimeout,
  raf,
  style2str,
  uuid
} from '../../util';

import './ripple.scss';

import _tpl from './ripple.html';

export default class Ripple extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    this.active = attrs.active;
    this.disabled = attrs.disabled;
    this.centered = attrs.centered;
    this.eventTrigger = attrs.eventTrigger !== false;
    this.ripples = VM([]);
    this.touchTimeout = null;
    this.eventType = null;
  }
  touchMoveCheck() {
    clearTimeout(this.touchTimeout)
  }
  touchStartCheck($event) {
    this.touchTimeout = setTimeout(() => {
      raf(this.startRipple.bind(this, $event));
    }, 100)
  }
  startRipple($event) {
    const { eventType, disabled, centered } = this;

    if (!disabled && (!eventType || eventType === $event.type)) {
      let size = this.getSize()
      let position = null

      if (centered) {
        position = this.getCenteredPosition(size)
      } else {
        position = this.getHitPosition($event, size)
      }

      this.eventType = $event.type;
      this.ripples.push({
        waveStyles: this.applyStyles(position, size),
        uuid: uuid()
      });
    }
  }
  applyStyles(position, size) {
    size += 'px';

    return style2str({
      ...position,
      width: size,
      height: size
    });
  }
  clearWave(uuid) {
    if (!uuid) return (this.ripples.length = 0);
    const idx = this.ripples.findIndex(ripple => ripple.uuid === uuid);
    if (idx < 0) return;
    this.ripples.splice(idx, 1);
  }
  getSize() {
    const { offsetWidth, offsetHeight } = this.$el

    return Math.round(Math.max(offsetWidth, offsetHeight))
  }
  getCenteredPosition(size) {
    const halfSize = -size / 2 + 'px'

    return {
      'margin-top': halfSize,
      'margin-left': halfSize
    };
  }
  getHitPosition($event, elementSize) {
    const rect = this.$el.getBoundingClientRect()
    let top = $event.pageY
    let left = $event.pageX

    if ($event.type === 'touchstart') {
      top = $event.changedTouches[0].pageY
      left = $event.changedTouches[0].pageX
    }

    return {
      top: top - rect.top - elementSize / 2 - document.documentElement.scrollTop + 'px',
      left: left - rect.left - elementSize / 2 - document.documentElement.scrollLeft + 'px'
    }
  }
}
