import { vm, arrayPushIfNotExist, arrayRemove } from 'jinge';
import { LocaleDict } from '../_locales/common';

export type LocaleChangeListener = (locale: LocaleDict) => void;

let watcher: LocaleChangeListener[];
let currentLocale: LocaleDict;

export function setLocale(v: LocaleDict) {
  currentLocale = vm(v);
  watcher?.forEach((listener) => {
    listener(currentLocale);
  });
}

export function getLocale() {
  if (!currentLocale) {
    throw new Error('locale not found. use setLocale() first.');
  }
  return currentLocale;
}

export function watchLocale(listener: LocaleChangeListener, immediate = false) {
  if (!watcher) watcher = [];
  arrayPushIfNotExist(watcher, listener);
  if (immediate) {
    listener(getLocale());
  }
}

export function getAndWatchLocale(listener: LocaleChangeListener, immediate = false) {
  watchLocale(listener, immediate);
  return getLocale();
}

export function unwatchLocale(listener: LocaleChangeListener) {
  if (!watcher) return;
  arrayRemove(watcher, listener);
}
