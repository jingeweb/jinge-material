import './index.scss';
import { Component, __, isPromise, uid, Attributes } from 'jinge';
import { fuzzySearch, startsSearch, includesSearch, EnumAttrValidator } from '../_util';

import _tpl from './index.html';

const SearchMethodValidator = new EnumAttrValidator('md-autocomplete', 'searchMethod', ['fuzzy', 'starts', 'includes']);
const LayoutValidator = new EnumAttrValidator('md-autocomplete', 'layout', ['floating', 'box']);

export interface AutocompleteAttrs {
  value?: unknown;
  dense?: boolean;
  layout?: 'floating' | 'box';
  openOnFocus?: boolean;
  searchMethod?: 'fuzzy' | 'starts' | 'includes';
  searchProp?: string;
  ignoreCase?: boolean;
  name?: string;
  id?: string;
  maxlength?: number;
  placeholder?: string;
  options?: (string | Record<string, unknown>)[];
}
export class Autocomplete extends Component {
  static template = _tpl;

  _value?: unknown;
  dense?: boolean;
  layout?: 'floating' | 'box';
  openOnFocus?: boolean;
  searchMethod?: 'fuzzy' | 'starts' | 'includes';
  searchProp?: string;
  ignoreCase?: boolean;
  name?: string;
  id?: string;
  maxlength?: number;
  placeholder?: string;
  _options?: (string | Record<string, unknown>)[];

  _hasScopedEmptySlot: boolean;
  isOptionsPromise: boolean;
  hasFilteredItems: boolean;
  promisePendingKey: unknown;
  filteredOptions: (string | Record<string, unknown>)[];
  showMenu: unknown;

  constructor(attrs: Attributes<AutocompleteAttrs>) {
    SearchMethodValidator.assert(attrs);
    LayoutValidator.assert(attrs);
    super(attrs);

    this._hasScopedEmptySlot = !!attrs[__].slots.empty;
    this.isOptionsPromise = false;
    this.hasFilteredItems = false;
    this.promisePendingKey = null;
    this.filteredOptions = null;

    this.value = attrs.value;
    this.dense = attrs.dense;
    this.layout = attrs.layout || 'floating';
    this.openOnFocus = attrs.openOnFocus !== false;
    this.searchMethod = attrs.searchMethod || 'fuzzy';
    this.searchProp = attrs.searchProp;
    this.ignoreCase = attrs.ignoreCase !== false;
    this.name = attrs.name;
    this.id = attrs.id;
    this.maxlength = attrs.maxlength;
    this.placeholder = attrs.placeholder;

    this.options = attrs.options;

    this.showMenu = false;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    if (this._value === v) return;
    this._value = v;
  }

  get options() {
    return this._options;
  }

  set options(v) {
    if (this._options === v) return;
    this._options = v;
    this.isOptionsPromise = isPromise(v);
    if (this.isOptionsPromise) {
      const pendingKey = uid();
      this.promisePendingKey = pendingKey;
      (v as unknown as Promise<unknown>).then(
        (resultOptions: Record<string, unknown>[]) => {
          /**
           * 如果上一次的 promise 还未返回，又有新的 promise 通过
           * 这个 setter 函数赋值进来时，需要忽略之前的 promise 的
           * 回调。通过闭包的技巧来实现该目标。
           */
          if (this.promisePendingKey !== pendingKey) {
            // ignore previous promise
            return;
          }
          this.promisePendingKey = null;
          if (resultOptions) {
            this.filteredOptions = resultOptions;
            this._updateHasItems();
          }
        },
        () => {
          if (this.promisePendingKey !== pendingKey) {
            return;
          }
          this.promisePendingKey = null;
        },
      );
    } else {
      this.promisePendingKey = null;
      this._updateFiltered();
    }
  }

  _updateHasItems() {
    this.hasFilteredItems = this.filteredOptions && this.filteredOptions.length > 0;
  }

  matchText(item: string) {
    const term = this._value as string;
    if (!term) {
      return true;
    }
    switch (this.searchMethod) {
      case 'fuzzy':
        return fuzzySearch(item, term, this.ignoreCase);
      case 'starts':
        return startsSearch(item, term, this.ignoreCase);
      case 'includes':
        return includesSearch(item, term, this.ignoreCase);
    }
    return false;
  }

  _updateFiltered() {
    if (this.isOptionsPromise) return;
    this.filteredOptions = this._options
      ? this._options.filter((item) => {
          if (this.searchProp) {
            return this.matchText((item as Record<string, string>)[this.searchProp]);
          } else {
            return this.matchText(item as string);
          }
        })
      : null;
    this._updateHasItems();
  }

  onInput(value: string) {
    if (this.value === value) {
      return;
    }
    this.value = value;
    this.__notify('change', value);
    this.__updateIfNeed(this._updateFiltered);
    if (!this.openOnFocus) {
      this.showOptions();
    }
  }

  _openOnFocus() {
    if (!this.openOnFocus) {
      return;
    }
    this.showOptions();
  }

  showOptions() {
    if (this.showMenu) {
      return false;
    }

    this.showMenu = true;
    this.__notify('opened');
    return true;
  }

  hideOptions() {
    this.showMenu = false;
    this.__notify('closed');
  }

  selectItem(item: unknown, $event: MouseEvent) {
    const content = ($event.target as HTMLElement).textContent.trim();
    if (this.value !== content) {
      this.value = content;
      this.__notify('change', content);
    }
    this.__notify('selected', item);
    this.hideOptions();
  }
}
