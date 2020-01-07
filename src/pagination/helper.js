import {
  vm
} from 'jinge';

export function _n(v, dn) {
  const n = Number(v);
  return Number.isNaN(n) || n <= 0 ? dn : n;
}

export const DEFAULT_PAGE_SIZE_OPTIONS = vm([10, 20, 40, 80]);
