export function MutationObserveDOM(el, config, cb) {
  if (!window.MutationObserver) {
    return null;
  }
  const observer = new window.MutationObserver(cb);
  observer.observe(el, config);

  return {
    disconnect: () => {
      observer.disconnect();
    }
  };
}
