import {
  arrayPushIfNotExist,
  defineProperty,
  arrayRemove
} from 'jinge/util';
import {
  addEvent
} from 'jinge/dom';
import {
  GET_FIRST_DOM
} from 'jinge';

let inited = false;
let eventTarget = null;
let supportsPassiveEvent = false;
let currentElement = null;
// const currentComponent = null;
const components = [];

function setKeyboardInteraction(event) {
  currentElement = event.target;
  components.forEach(c => {
    const el = c[GET_FIRST_DOM]();
    const isFocus = el === currentElement;
    if (c.hasFocus !== isFocus) {
      c.hasFocus = isFocus;
    }
  });
}

function setMouseAndTouchInteraction() {
  currentElement = null;
  components.forEach(c => {
    if (c.hasFocus !== false) {
      c.hasFocus = false;
    }
  });
}

function createKeyboardEvents() {
  addEvent(eventTarget, 'keyup', setKeyboardInteraction);
}

function createPointerEvents() {
  addEvent(eventTarget, 'pointerup', setMouseAndTouchInteraction);
}

function createMSPointerEvents() {
  addEvent(eventTarget, 'MSPointerUp', setMouseAndTouchInteraction);
}

function createMouseAndTouchEvents() {
  addEvent(eventTarget, 'mouseup', setMouseAndTouchInteraction);

  if ('ontouchend' in window) {
    addEvent(
      eventTarget,
      'touchend',
      setMouseAndTouchInteraction,
      supportsPassiveEvent
    );
  }
}

function checkPassiveEventSupport() {
  try {
    const opts = defineProperty({}, 'passive', {
      get() {
        supportsPassiveEvent = {
          passive: true
        };
      }
    });
    addEvent(window, 'ghost', null, opts);
  } catch (e) {
    // ignore
  }
}

function bindEvents() {
  if (window.PointerEvent) {
    createPointerEvents();
  } else if (window.MSPointerEvent) {
    createMSPointerEvents();
  } else {
    createMouseAndTouchEvents();
  }
  createKeyboardEvents();
}

function initEvents() {
  if (inited) return;
  eventTarget = document.body;
  checkPassiveEventSupport();
  bindEvents();
  inited = true;
}

export function registerFocus(component) {
  arrayPushIfNotExist(components, component);
  initEvents();
}

export function deregisterFocus(component) {
  arrayRemove(components, component);
}
