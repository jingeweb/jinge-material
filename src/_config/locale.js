
import {
  VM
} from 'jinge';
import {
  arrayPushIfNotExist,
  arrayRemove
} from 'jinge/util';

import zhCN from '../../locale/zh_cn';

const defaultLocale = VM(zhCN);
let watcher;
let currentLocale;

export function setLocale(v) {
  currentLocale = v ? VM(v) : defaultLocale;
  watcher && watcher.forEach(listener => {
    listener(currentLocale);
  });
}

export function getLocale() {
  return currentLocale || defaultLocale;
}

export function watchLocale(listener) {
  if (!watcher) watcher = [];
  arrayPushIfNotExist(watcher, listener);
}

export function getAndWatchLocale(listener) {
  watchLocale(listener);
  return getLocale();
}

export function unwatchLocale(listener) {
  if (!watcher) return;
  arrayRemove(watcher, listener);
}
