const path = require('path');
const fs = require('fs-extra');
const https = require('https');
const HttpsProxyAgent = require('https-proxy-agent');
const HTTP_RPOXY = process.env.PROXY ? (process.env.PROXY === 'local' ? 'http://127.0.0.1:1087' : process.env.PROXY) : null;
const ICON_COMPOENTS_OUTPUT = path.resolve(__dirname, '../src/components/icon/_auto_generated.js');
const ICON_ALIAS_FILE = path.resolve(__dirname, '../compiler/_auto_generated_icons_alias.js');
const PARALLEL = Number(process.env.PARALLEL || 40);

const ICON_COMPONENT_TPL = `
export class $$NAME$$ extends Icon {
  get svg() {
    return $$SVG$$;
  }
}\n`;

function download(url, fileStream) {
  return new Promise((resolve, reject) => {
    const opts = {
      host: 'material.io',
      path: url,
      port: 443,
      headers: {
        'cookie': '_ga=GA1.2.1199999695.1545021439; _gaexp=GAX1.2.6GjXDvIERWCxxcbRcG-lHQ.18089.2; _gid=GA1.2.219007254.1560221410',
        'refer': 'https://material.io/tools/icons/?style=baseline',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36'
      }
    };
    if (HTTP_RPOXY) {
      opts.agent = new HttpsProxyAgent(HTTP_RPOXY);
    }
    const req = https.get(opts, res => {
      if (res.statusCode !== 200) {
        return reject('network error:' + res.statusCode);
      }
      let result;
      res.on('data', chunk => {
        if (fileStream) {
          fileStream.write(chunk);
          return;
        }
        if (!result) result = Buffer.alloc(0);
        result = Buffer.concat([result, chunk], result.length + chunk.length);
      });
      res.on('end', () => {
        if (fileStream) {
          fileStream.end();
        }
        resolve(result);
      });
    });
    req.on('error', err => {
      if (fileStream) {
        fileStream.end();
      }
      reject(err);
    });
  });
}

function convertCase(w) {
  return w.replace(/^[a-z]/, m => m.toUpperCase()).replace(/[_-]([a-z0-9])/g, (m0, m1) => m1.toUpperCase());
}

const THEMES = [
  'baseline',
  'outline',
  'round',
  'sharp',
  'twotone'
];


class Downloader {
  constructor(icons) {
    this.icons = icons;
    if (process.env.INCLUDE) {
      const is = process.env.INCLUDE.split(',').map(n => n.trim());
      this.icons = icons.filter(ic => is.indexOf(ic.id) >= 0);
    }
    this._codes = [];
    this._fails = [];
    this._i = process.env.INCLUDE ? 0 : Number(process.env.START || 0);
  }
  run() {
    console.log(`${this.icons.length - this._i} icons to download.`);
    return new Promise((resolve, reject) => {
      this._res = resolve;
      this._rej = reject;
      this.schedule();
    });
  }
  schedule() {
    if (this._i >= this.icons.length) {
      console.log('finished.');
      if (this._fails.length > 0) {
        console.log('failed: ', this._fails.join(','));
      }
      this._res(this._codes.join(''));
      this._res = this._rej = this.icons = null;
      return;
    }
    const ics = this.icons.slice(this._i, this._i + PARALLEL);
    this._i += ics.length;
    Promise.all(ics.map(ic => {
      return this.downloadIcon(ic).catch(err => {
        this._fails.push(ic.id);
        console.log(`download failed for icon: ${ic.id}`, err);
      });
    })).then(() => {
      fs.writeFile(
        ICON_COMPOENTS_OUTPUT,
        this._codes.join(''), {flag: 'a'}
      );
      this._codes.length = 0;
      console.log(this._i + ' / ' + this.icons.length);
      this.schedule();
    }, err => {
      this._rej(err);
    });
  }
  async downloadIcon(ic) {
    const imageUrls = ic.imageUrls;
    await Promise.all(THEMES.map(theme => {
      let url;
      if (imageUrls && imageUrls[theme]) {
        url = imageUrls[theme];
      } else {
        url = `${theme}-${ic.id}-24px.svg`;
      }
      return download(
        `/tools/icons/static/icons/${url}`
      ).then(buf => {
        const code = ICON_COMPONENT_TPL.replace(
          '$$NAME$$', `Icon${convertCase(theme)}${convertCase(ic.id)}`
        ).replace(
          '$$SVG$$', '`\n' + buf.toString() + '`'
        );
        return this._codes.push(code);
      });
    }));
  }
}

(async function() {
  const json = (await download('/tools/icons/static/data.json')).toString();
  const data = JSON.parse(json);
  let icons = [];
  data.categories.forEach(cat => {
    icons = icons.concat(cat.icons);
  });
  await fs.writeFile(
    ICON_ALIAS_FILE,
    `/* This file is auto genreated by script, never change it manually. */
module.exports = {
${icons.map(ic => {
    return THEMES.map(theme => `  Icon${convertCase(theme)}${convertCase(ic.id)} : 'md-icon-${theme}-${ic.id}'`).join(',\n');
  }).join(',\n')}
};`);
  if (process.env.START === '-1') {
    return;
  }
  const needReset = !process.env.START && !process.env.INCLUDE;
  if (needReset) {
    await fs.writeFile(
      ICON_COMPOENTS_OUTPUT,
      `/* This file is auto genreated by script, never change it manually. */
import {
  Icon
} from './base.js';\n`
    );
  }
  await (new Downloader(icons)).run();
})().catch(err => {
  console.error(err);
});

