import { createElement } from 'jinge';
import { getEnv } from './env';

const env = getEnv();

export function setCurrentTheme(theme) {
  localStorage.setItem(env.themeKey, theme);
  env.theme = theme;
  const $head = document.head;
  const $oldLink = document.getElementById(env.themeId);
  const $link = createElement('link', {
    rel: 'stylesheet',
    href: env.meta.theme[theme],
    id: env.themeId,
  });
  $link.onload = function () {
    $oldLink && $head.removeChild($oldLink);
  };
  $head.appendChild($link);
}
