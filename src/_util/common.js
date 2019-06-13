export function raf(callback) {
  return window.requestAnimationFrame(callback);
}
export function caf(handle) {
  return window.cancelAnimationFrame(handle);
}
