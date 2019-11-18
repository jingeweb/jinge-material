import './ripple.scss';

import {
  Component,
  VM,
  NOTIFY,
  ROOT_NODES,
  isBoolean,
  obj2style,
  uid,
  isObject
} from 'jinge';

import _tpl from './ripple.html';

export class Ripple extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.active = attrs.active;
    this.disabled = attrs.disabled;
    this.centered = attrs.centered;
    this.className = attrs.class;
    this.ripples = VM([]);
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
      if (isObject(v)) {
        v = v._event;
      } else {
        isBool = true;
        v = !!v;
      }
    }
    if (isBool && this.centered && v) {
      this.startRipple({
        type: 'mousedown'
      });
    } else if (v && v.constructor.toString().match(/function (\w*)/)[1].toLowerCase() === 'mouseevent') {
      this.startRipple(v);
    }

    this[NOTIFY]('update.active', false);
  }

  touchMoveCheck() {
    clearTimeout(this._touchTimeout);
  }

  touchStartCheck($event) {
    this._touchTimeout = setTimeout(() => {
      this.startRipple.bind(this, $event);
    }, 100);
  }

  startRipple($event) {
    const {
      _eventType, disabled, centered
    } = this;

    if (!disabled && (!_eventType || _eventType === $event.type)) {
      const size = this.getSize();
      let position = null;

      if (centered) {
        position = this.getCenteredPosition(size);
      } else {
        position = this.getHitPosition($event, size);
      }

      this._eventType = $event.type;
      this.ripples.push(VM({
        waveStyles: this.applyStyles(position, size),
        uuid: uid()
      }));
    }
  }

  applyStyles(position, size) {
    size += 'px';

    return obj2style(
      Object.assign({
        width: size,
        height: size
      }, position)
    );
  }

  clearWave(uuid) {
    if (!uuid) return (this.ripples.length = 0);
    const idx = this.ripples.findIndex(ripple => ripple.uuid === uuid);
    if (idx < 0) return;
    this.ripples.splice(idx, 1);
  }

  getSize() {
    const {
      offsetWidth, offsetHeight
    } = this[ROOT_NODES][0];

    return Math.round(Math.max(offsetWidth, offsetHeight));
  }

  getCenteredPosition(size) {
    const halfSize = -size / 2 + 'px';

    return {
      'margin-top': halfSize,
      'margin-left': halfSize
    };
  }

  getHitPosition($event, elementSize) {
    const rect = this[ROOT_NODES][0].getBoundingClientRect();
    let top = $event.pageY;
    let left = $event.pageX;

    if ($event.type === 'touchstart') {
      top = $event.changedTouches[0].pageY;
      left = $event.changedTouches[0].pageX;
    }

    return {
      top:
        top -
        rect.top -
        elementSize / 2 -
        document.documentElement.scrollTop +
        'px',
      left:
        left -
        rect.left -
        elementSize / 2 -
        document.documentElement.scrollLeft +
        'px'
    };
  }
}
