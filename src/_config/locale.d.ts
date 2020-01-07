export type LocaleChangeListener = (locale: string) => void;

export function setLocale(v: unknown): void;

export function getLocale(): unknown;

export function watchLocale(listener: LocaleChangeListener, immediate: boolean): void;

export function getAndWatchLocale(listener: LocaleChangeListener, immediate: boolean): string;

export function unwatchLocale(listener: LocaleChangeListener): void;
