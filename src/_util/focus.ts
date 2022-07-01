import { arrayPushIfNotExist, arrayRemove, addEvent, Component } from 'jinge';

let inited = false;
let eventTarget: HTMLElement = null;
let supportsPassiveEvent: false | { passive: true } = false;
let currentElement: HTMLElement = null;
// const currentComponent = null;
const components: (Component & { hasFocus: boolean })[] = [];

function setKeyboardInteraction(event: KeyboardEvent) {
  currentElement = event.target as HTMLElement;
  components.forEach((c) => {
    const el = c.__firstDOM;
    const isFocus = el === currentElement;
    if (c.hasFocus !== isFocus) {
      c.hasFocus = isFocus;
    }
  });
}

function setMouseAndTouchInteraction() {
  currentElement = null;
  components.forEach((c) => {
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

// function createMSPointerEvents() {
//   addEvent(eventTarget, 'MSPointerUp', setMouseAndTouchInteraction);
// }

function createMouseAndTouchEvents() {
  addEvent(eventTarget, 'mouseup', setMouseAndTouchInteraction);

  if ('ontouchend' in window) {
    addEvent(eventTarget, 'touchend', setMouseAndTouchInteraction, supportsPassiveEvent);
  }
}

function checkPassiveEventSupport() {
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        supportsPassiveEvent = {
          passive: true,
        };
        return true;
      },
    });
    addEvent(window, 'ghost', null, opts);
  } catch (e) {
    // ignore
  }
}

function bindEvents() {
  if (window.PointerEvent) {
    createPointerEvents();
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

export function registerFocus(component: Component) {
  arrayPushIfNotExist(components, component);
  initEvents();
}

export function deregisterFocus(component: Component) {
  arrayRemove(components, component);
}
