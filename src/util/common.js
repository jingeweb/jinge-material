export { simpleUUID as uuid } from 'jinge/util';

export function setTimeout(...args) {
  return window.setTimeout(...args);
}
export function clearTimeout(handle) {
  return window.clearTimeout(handle);
}
export function setInterval(...args) {
  return window.setInterval(...args);
}
export function clearInterval(handle) {
  return window.clearInterval(handle);
}
export function raf(callback) {
  return window.requestAnimationFrame(callback);
}
export function caf(handle) {
  return window.cancelAnimationFrame(handle);
}

export function style2str(styleObj) {
  return Object.keys(styleObj).map(k => {
    return `${k}: ${styleObj[k]};`;
  }).join(' ');
}

export function class2str(classObj) {
  return Object.keys(classObj).map(k => {
    const v = !!classObj[k];
    return v ? k.trim() : '';
  }).filter(c => !!c).join(' ');
}
