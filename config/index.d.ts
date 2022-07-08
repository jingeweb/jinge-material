import { LocaleDict } from '../src/_locales/common';

export type LocaleChangeListener = (locale: LocaleDict) => void;
export function setLocale(v: LocaleDict): void;
export function getLocale(): LocaleDict;
export function watchLocale(listener: LocaleChangeListener, immediate?: boolean): void;
export function getAndWatchLocale(listener: LocaleChangeListener, immediate?: boolean): LocaleDict;
export function unwatchLocale(listener: LocaleChangeListener): void;
