function pad(n) {
  return n >= 10 ? n.toString() : ('0' + n);
}

function lc(w) {
  w = w.charCodeAt(0);
  return w >= 100 ? w - 32 : w;
}

export function isEqual(dateA, dateB) {
  if (!dateA || !dateB) return dateA === dateB;
  return dateA.getTime() === dateB.getTime();
}

export function getDaysInMonth(year, monthIndex) {
  return new Date(monthIndex === 11 ? year + 1 : year, monthIndex === 11 ? 0 : monthIndex + 1, 0).getDate();
}

export function isValid(date) {
  return date instanceof Date && !Number.isNaN(date.getTime());
}

/**
 * Simple date parse function. Only support simple format like yyyy-mm-dd or dd/mm/yyyy
 * @param {String} inputStr input string to parse
 * @param {String} format simple date format
 */
export function parse(inputStr, format) {
  const fm = format.match(/y+|m+|d+/ig);
  const im = inputStr.match(/\d+/g);
  if (!fm || !im || fm.length !== 3 || im.length !== 3) return null;
  const ds = [0, 0, 0]; // [year, month, day]
  fm.forEach((s, i) => {
    s = lc(s);
    ds[
      s === 89 ? 0 : (s === 77 ? 1 : 2)
    ] = Number(im[i]);
  });
  if (ds[0] <= 0 || ds[1] <= 0 || ds[2] < 0) {
    return null;
  }
  return new Date(ds[0], ds[1] - 1, ds[2]);
}

/**
 * Simple date format function. Only support simple format like yyyy-mm-dd.
 * @param {Date} date date to format
 * @param {String} formatStr simple date format
 */
export function format(date, formatStr) {
  return formatStr.replace(/y+|m+|d+/ig, match => {
    const c = lc(match);
    return pad(
      c === 89 ? date.getFullYear() : (
        c === 77 ? (date.getMonth() + 1) : date.getDate()
      )
    );
  });
}

/**
 * parse simple date format to regexp string.
 * @param {String} formatStr format string
 * @returns {String}
 */
export function formatToReStr(formatStr) {
  return formatStr.replace(/y+|m+|d+|\\/ig, match => {
    const c = lc(match);
    return (
      c === 92 ? '\\\\' : `[0-9]{${c === 89 ? 4 : 2}}`
    );
  });
}
