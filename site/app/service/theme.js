import {
  getEnv
} from './env';
import {
  removeChild,
  createElement,
  appendChild
} from 'jinge';

const env = getEnv();

export function setCurrentTheme(theme) {
  localStorage.setItem(env.themeKey, theme);
  env.theme = theme;
  const $head = document.head;
  const $oldLink = document.getElementById(env.themeId);
  $oldLink && removeChild($head, $oldLink);
  const $link = createElement('link', {
    rel: 'stylesheet',
    href: env.themeTpl.replace('[theme]', theme),
    id: env.themeId
  });
  appendChild($head, $link);
}
