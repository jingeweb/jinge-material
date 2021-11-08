import { isObject, isUndefined } from 'jinge';

export function getBaseHref() {
  const $bs = document.getElementsByTagName('base');
  const href = $bs.length > 0 ? $bs[0].getAttribute('href') : '';
  return href || '/';
}

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
  return function () {
    clearTimeout(tm);
    tm = setTimeout((...args) => {
      fn(...args);
    }, time);
  };
}

export function obj2class(obj, prepend) {
  const classes = Object.keys(obj)
    .filter((k) => obj[k])
    .join(' ')
    .trim();
  return prepend ? `${prepend}${classes ? ' ' + classes : ''}` : classes;
}

export function obj2style(obj) {
  return Object.keys(obj)
    .map((k) => {
      return `${k}: ${obj[k]}`;
    })
    .join(';')
    .trim();
}
