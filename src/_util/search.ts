import { isFunction } from 'jinge';

function defaultHighlightFn(str: string) {
  return `<span class="md-highlight-text-match">${str.replace(/</g, '&#x3C;')}</span>`;
}

/**
 * fuzzysearch modified from https://github.com/bevacqua/fuzzysearch/blob/master/index.js
 */
function fuzzy(text: string, term: string, ignoreCase = true, highlightFn?: typeof defaultHighlightFn) {
  const hlen = text.length;
  const nlen = term.length;
  if (nlen > hlen) {
    return highlightFn ? text : false;
  }
  const ctext = ignoreCase ? text.toLowerCase() : text;
  const cterm = ignoreCase ? term.toLowerCase() : term;
  if (nlen === hlen) {
    if (ctext === cterm) {
      return highlightFn ? highlightFn(text) : true;
    } else {
      return highlightFn ? text : false;
    }
  }
  let pI = 0;
  let pY = -1;
  let pN = -1;
  let i = 0;
  let j = 0;
  let segs: string[];
  // eslint-disable-next-line no-labels
  outer: for (; i < nlen; i++) {
    const nch = cterm.charCodeAt(i);
    while (j < hlen) {
      if (ctext.charCodeAt(j) === nch) {
        if (highlightFn) {
          pY = j;
          if (pN >= 0) {
            if (!segs) segs = [];
            segs.push(text.substring(pI, pN + 1));
            pN = -1;
            pI = pY;
          }
        }
        j++;
        // eslint-disable-next-line no-labels
        continue outer;
      } else {
        if (highlightFn) {
          pN = j;
          if (pY >= 0) {
            if (!segs) segs = [];
            segs.push(highlightFn(text.substring(pI, pY + 1)));
            pY = -1;
            pI = pN;
          }
        }
        j++;
      }
    }
    return highlightFn ? text : false;
  }
  if (!highlightFn) {
    return true;
  }
  if (pI > 0) {
    segs.push(highlightFn(text.substring(pI, pY + 1)));
    if (pY + 1 < text.length) {
      segs.push(text.substring(pY + 1));
    }
    return segs.join('');
  } else {
    return highlightFn(text.substring(0, pY + 1)) + text.substring(pY + 1);
  }
}

export function fuzzySearch(text: string, term: string, ignoreCase = true) {
  if (!text || !term) return false;
  return fuzzy(text, term, ignoreCase);
}

export function fuzzyHighlight(text: string, term: string, ignoreCase = true, highlightFn = defaultHighlightFn) {
  if (!text || !term) {
    return text || '';
  }
  if (isFunction(ignoreCase)) {
    highlightFn = ignoreCase as typeof defaultHighlightFn;
    ignoreCase = true;
  }
  return fuzzy(text, term, ignoreCase, highlightFn) as string;
}

export function includesSearch(text: string, term: string, ignoreCase = true) {
  if (!text && !term) {
    return true;
  }
  if ((!text && term) || (text && !term) || term.length > text.length) {
    return false;
  }
  return ignoreCase ? text.toLowerCase().includes(term.toLowerCase()) : text.includes(term);
}

export function includesHighlight(text: string, term: string, ignoreCase = true, highlightFn = defaultHighlightFn) {
  if ((!text && !term) || !text) {
    return '';
  }
  if (!term || term.length > text.length) {
    return text;
  }
  if (isFunction(ignoreCase)) {
    highlightFn = ignoreCase as typeof defaultHighlightFn;
    ignoreCase = true;
  }
  return text.replace(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), ignoreCase ? 'i' : ''), (m) =>
    highlightFn(m),
  );
}

export function startsSearch(text: string, term: string, ignoreCase = true) {
  if (!text && !term) {
    return true;
  }
  if ((!text && term) || (text && !term) || term.length > text.length) {
    return false;
  }
  return ignoreCase ? text.toLowerCase().startsWith(term.toLowerCase()) : text.startsWith(term);
}

export function startsHighlight(text: string, term: string, ignoreCase = true, highlightFn = defaultHighlightFn) {
  if ((!text && !term) || !text) {
    return '';
  }
  if (isFunction(ignoreCase)) {
    highlightFn = ignoreCase as typeof defaultHighlightFn;
    ignoreCase = true;
  }
  if (!startsSearch(text, term, ignoreCase)) {
    return text;
  }
  return highlightFn(text.substring(0, term.length)) + text.substring(term.length);
}
