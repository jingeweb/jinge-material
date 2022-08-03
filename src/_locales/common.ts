export interface LocaleDict {
  sizePerPage: string;
  jumpToPage: string;
  totalCount: string;
  Cancel: string;
  Ok: string;
  datePlaceholder: string;
  dateFormat: string;
  firstDayOfWeek: number;
  dayPickerHeader: string;
  months: string[];
  monthsShort: string[];
  weekdays: string[];
  weekdaysShort: string[];
  weekdaysMin: string[];
}

const cache: Map<string, (ctx: unknown) => string> = new Map();
export function compile(text: string) {
  let fn = cache.get(text);
  if (!fn) {
    cache.set(text, (fn = new Function('ctx', `return \`${text}\`;`) as (ctx: unknown) => string));
  }
  return fn;
}
