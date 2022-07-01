import { isObject, isUndefined } from 'jinge';

export function getBaseHref() {
  const $bs = document.getElementsByTagName('base');
  const href = $bs.length > 0 ? $bs[0].getAttribute('href') : '';
  return href || '/';
}

export function raf(callback: FrameRequestCallback) {
  return window.requestAnimationFrame(callback);
}

export function caf(handle: number) {
  return window.cancelAnimationFrame(handle);
}

export function mergePopperOpts(src: Record<string, unknown>, dst: Record<string, unknown>) {
  if (!dst) return src;
  for (const prop in dst) {
    const sv = src[prop];
    const dv = dst[prop];
    if (isObject(sv) && isObject(dv)) {
      mergePopperOpts(sv as Record<string, unknown>, dv as Record<string, unknown>);
    } else if (!isUndefined(dv) && dv !== null) {
      src[prop] = dv;
    }
  }
  return src;
}

export function debounce(fn: (...args: unknown[]) => void, time: number) {
  let tm: number;
  return function () {
    clearTimeout(tm);
    tm = window.setTimeout((...args: unknown[]) => {
      fn(...args);
    }, time);
  };
}
