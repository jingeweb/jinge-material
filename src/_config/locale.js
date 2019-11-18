
import {
  VM
} from 'jinge';
import {
  arrayPushIfNotExist,
  arrayRemove
} from 'jinge/util';

let watcher;
let currentLocale;

export function setLocale(v) {
  currentLocale = VM(v);
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

export function getAndWatchLocale(listener) {
  watchLocale(listener);
  return getLocale();
}

export function unwatchLocale(listener) {
  if (!watcher) return;
  arrayRemove(watcher, listener);
}
