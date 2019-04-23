import {
  arrayPushIfNotExist,
  defineProperty,
  arrayRemove
} from 'jinge/util';
import {
  addEvent
} from 'jinge/dom';
import {
  ROOT_NODES,
  isComponent
} from 'jinge/core/component';

let inited = false;
let eventTarget = null;
let supportsPassiveEvent = false;
let currentComponent = null;
const components = [];

function setKeyboardInteraction(event) {
  currentElement = event.target;
  components.forEach(c => {
    const el = c[ROOT_NODES][0];
    const isFocus = el === currentElement;
    if (c.hasFocus !== isFocus) {
      c.hasFocus = isFocus;
    }
  });
}

function setMouseAndTouchInteraction(event) {
  currentElement = null;
  components.forEach(c => {
    if (c.hasFocus !== false) {
      c.hasFocus = false;
    }
  });
}

function createKeyboardEvents() {
  eventTarget.addEventListener('keyup', setKeyboardInteraction)
}

function createPointerEvents() {
  eventTarget.addEventListener('pointerup', setMouseAndTouchInteraction)
}

function createMSPointerEvents() {
  eventTarget.addEventListener('MSPointerUp', setMouseAndTouchInteraction)
}

function createMouseAndTouchEvents() {
  eventTarget.addEventListener('mouseup', setMouseAndTouchInteraction)

  if ('ontouchend' in window) {
    eventTarget.addEventListener('touchend', setMouseAndTouchInteraction, supportsPassiveEvent)
  }
}

function checkPassiveEventSupport() {
  try {
    const opts = defineProperty({}, 'passive', {
      get() {
        supportsPassiveEvent = { passive: true };
      }
    });
    addEvent(window, 'ghost', null, opts);
  } catch (e) {
    // ignore
  }
}

function initEvents() {
  if (inited) return;
  eventTarget = document.body
  checkPassiveEventSupport()
  bindEvents()
  inited = true
}

export function register(component) {
  const res = component[ROOT_NODES];
  if (res.length > 1 || isComponent(res[0])) {
    throw new Error('component passed to FocusedManager.register must have only one html node child.');
  }
  arrayPushIfNotExist(components, component);
  initEvents();
}

export function deregister(component) {
  arrayRemove(components, component);
}