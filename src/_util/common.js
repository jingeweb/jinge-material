import {
  isObject,
  isUndefined
} from 'jinge';

export function raf(callback) {
  return window.requestAnimationFrame(callback);
}

export function caf(handle) {
  return window.cancelAnimationFrame(handle);
}

export function mergePopperOpts(src, dst) {
  if (!dst) return src;
  for (const prop in dst) {
    const sv = src[prop];
    const dv = dst[prop];
    if (isObject(sv) && isObject(dv)) {
      mergePopperOpts(sv, dv);
    } else if (!isUndefined(dv) && dv !== null) {
      src[prop] = dv;
    }
  }
  return src;
}

export function debounce(fn, time) {
  let tm;
  return function() {
    clearTimeout(tm);
    tm = setTimeout((...args) => {
      fn(...args);
    }, time);
  };
}
