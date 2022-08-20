import { addEvent, Component } from 'jinge';

let inited = false;
let eventTarget: HTMLElement = null;
let supportsPassiveEvent: false | { passive: true } = false;
let currentElement: HTMLElement = null;
type FocusComponent = Component & { hasFocus?: boolean };
const components: Set<FocusComponent> = new Set();

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
  console.log('init focus manager');
  eventTarget = document.body;
  checkPassiveEventSupport();
  bindEvents();
  inited = true;
}

export function registerFocus(component: FocusComponent) {
  components.add(component);
  initEvents();
}

export function deregisterFocus(component: FocusComponent) {
  components.delete(component);
}
