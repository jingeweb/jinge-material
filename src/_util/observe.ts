/**
 * @returns deregister function to disconnect observer
 */
export function MutationObserveDOM(el: HTMLElement, config: MutationObserverInit, cb: MutationCallback) {
  if (!window.MutationObserver) {
    return null;
  }
  const observer = new window.MutationObserver(cb);
  observer.observe(el, config);

  return () => {
    observer.disconnect();
  };
}
