const path = require('path');
const fs = require('fs-extra');
const https = require('https');
const HttpsProxyAgent = require('https-proxy-agent');
const slog = require('single-line-log').stdout;

const HTTP_RPOXY = process.env.PROXY ? (process.env.PROXY === 'local' ? 'http://127.0.0.1:1087' : process.env.PROXY) : null;
const ICONS_DIR = path.resolve(__dirname, '../icons');
const ICON_ALIAS_FILE = path.resolve(__dirname, '../compiler/_auto_generated_icons_alias.js');
const PARALLEL = Number(process.env.PARALLEL || 20);

function download(url, fileStream) {
  return new Promise((resolve, reject) => {
    const opts = {
      host: 'material.io',
      path: url,
      port: 443,
      headers: {
        cookie: '_ga=GA1.2.1199999695.1545021439; _gaexp=GAX1.2.6GjXDvIERWCxxcbRcG-lHQ.18089.2; _gid=GA1.2.219007254.1560221410',
        refer: 'https://material.io/tools/icons/?style=baseline',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36'
      }
    };
    if (HTTP_RPOXY) {
      opts.agent = new HttpsProxyAgent(HTTP_RPOXY);
    }
    const req = https.get(opts, res => {
      if (res.statusCode !== 200) {
        return reject(new Error('network error:' + res.statusCode));
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
    this._fails = [];
    this._t = 0; // total to download
    this._r = 0; // running
    this._n = 0; // finished
    this._i = process.env.INCLUDE ? 0 : Number(process.env.START || 0);
  }

  run() {
    this._t = this.icons.length - this._i;
    console.log('start downloading...');
    slog(`0 / ${this._t}`);
    return new Promise((resolve, reject) => {
      this._res = resolve;
      this._rej = reject;
      this.schedule();
    });
  }

  doneAll() {
    slog.clear();
    console.log('\nfinished.');
    if (this._fails.length > 0) {
      console.log('failed: ', this._fails.join(','));
    }
    this._res();
    this._res = this._rej = this.icons = null;
  }

  doneOne() {
    this._n++;
    this._r--;
    slog(`${this._n} / ${this._t}`);
    if (this._n >= this.icons.length) {
      this.doneAll();
    } else {
      this.schedule();
    }
  }

  schedule() {
    while (this._i < this.icons.length && this._r < PARALLEL) {
      const ic = this.icons[this._i];
      this._r++;
      this._i++;
      (ic => {
        let tries = 1;
        const _try = () => {
          this.downloadIcon(ic).then(() => {
            this.doneOne();
          }, err => {
            if (tries++ < 5) {
              _try();
              return;
            }
            console.log('\n\nfailed to download icon: ', ic.id, '\n  -> ', err.message || err, '\n');
            this._fails.push(ic.id);
            this.doneOne();
          });
        };
        _try();
      })(ic);
    }
  }

  async downloadIcon(ic) {
    const imageUrls = ic.imageUrls;
    const codes = await Promise.all(THEMES.map(theme => {
      let url;
      if (imageUrls && imageUrls[theme]) {
        url = imageUrls[theme];
      } else {
        url = `${theme}-${ic.id}-24px.svg`;
      }
      return download(
        `/tools/icons/static/icons/${url}`
      ).then(buf => {
        return {
          name: `Icon${convertCase(theme)}${convertCase(ic.id)}`,
          dul: null, // dulplicated
          dep: false,
          svg: '`\n' + buf.toString() + '`'
        };
      });
    }));
    for (let i = 1; i < codes.length; i++) {
      const ci = codes[i];
      for (let j = 0; j < i; j++) {
        const cj = codes[j];
        if (!cj.dul && ci.svg === cj.svg) {
          ci.dul = cj.name;
          cj.dep = true;
          break;
        }
      }
    }
    await fs.writeFile(
      path.join(ICONS_DIR, `${ic.id}.js`),
      `import {
  Icon
} from '../src/icon';
${codes.map(c => `${c.dep && !c.dul ? `
const __svg_${c.name} = ${c.svg};\n` : ''}
export class ${c.name} extends Icon {
  get svg() {
    return ${!c.dep && !c.dul ? c.svg : `__svg_${c.dul ? c.dul : c.name}`};
  }
}`).join('\n')}`
    );
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
    return `  'jinge-material/icons/${ic.id}': {
${THEMES.map(theme => `    Icon${convertCase(theme)}${convertCase(ic.id)} : 'md-icon-${theme}-${ic.id}'`).join(',\n')}
  }`;
  }).join(',\n')}
};`);
  if (process.env.START === '-1') {
    return;
  }
  const needReset = !process.env.START && !process.env.INCLUDE;
  if (needReset) {
    await fs.emptyDir(ICONS_DIR);
    await fs.writeFile(
      path.join(ICONS_DIR, 'README.md'),
      'Files under this directory is auto generated by script, never modify it manually.'
    );
  }
  await (new Downloader(icons)).run();
})().catch(err => {
  console.error(err);
});
