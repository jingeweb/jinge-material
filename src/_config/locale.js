
import {
  vm, arrayPushIfNotExist, arrayRemove
} from 'jinge';

let watcher;
let currentLocale;

export function setLocale(v) {
  currentLocale = vm(v);
  watcher && watcher.forEach(listener => {
    listener(currentLocale);
  });
}

export function getLocale() {
  if (!currentLocale) {
    throw new Error('locale not found. use setLocale() first.');
  }
  return currentLocale;
}

export function watchLocale(listener, immediate = false) {
  if (!watcher) watcher = [];
  arrayPushIfNotExist(watcher, listener);
  if (immediate) {
    listener(getLocale());
  }
}

export function getAndWatchLocale(listener, immediate = false) {
  watchLocale(listener, immediate);
  return getLocale();
}

export function unwatchLocale(listener) {
  if (!watcher) return;
  arrayRemove(watcher, listener);
}
