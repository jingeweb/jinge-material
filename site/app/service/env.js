const env = window.__env__;

export function getEnv(name) {
  if (!name) return env;
  return env[name];
}
