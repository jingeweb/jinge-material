const env = window.__AppEnv || {};

export function getEnv(name) {
  if (!name) return env;
  return env[name];
};
