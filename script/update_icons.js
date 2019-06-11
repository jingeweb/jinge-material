const path = require('path');
const fs = require('fs-extra');
const https = require('https');
const HttpsProxyAgent = require('https-proxy-agent');
const HTTP_RPOXY = process.env.PROXY ? (process.env.PROXY === 'local' ? 'http://127.0.0.1:1087' : process.env.PROXY) : null;
const DOWNLOAD_TMP_DIR = path.resolve(__dirname, '../.tmp/downloaded_svgs');
const PARALLEL = process.env.PARALLEL || 100;

function download(url, fileStream) {
  return new Promise((resolve, reject) => {
    const opts = {
      host: 'material.io',
      path: url,
      port: 443,
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

async function downloadIcon(url, filepath) {
  let err;
  for(let i = 0; i < 3; i++) {
    const out = fs.createWriteStream(filepath);
    try {
      return await download(url, out);
    } catch(ex) {
      out.end();
      err = ex;
    }
  }
  throw err;
}

class Downloader {
  constructor(icons, theme) {
    this.icons = icons;
    this.theme = theme || 'outline';
    this._i = 0;
  }
  run() {
    return new Promise((resolve, reject) => {
      this._res = resolve;
      this._rej = reject;
      this.schedule();
    });
  }
  schedule() {
    if (this._i >= this.icons.length) {
      this._res();
      this._res = this._rej = this.icons = null;
      return;
    }
    const ics = this.icons.slice(this._i, this._i + PARALLEL);
    this._i += ics.length;
    Promise.all(ics.map(ic => {
      const imageUrls = ic.imageUrls;
      let url;
      if (imageUrls && imageUrls[this.theme]) {
        url = imageUrls[this.theme];
      } else {
        url = `${this.theme}-${ic.id}-24px.svg`;
      }
      return downloadIcon(
        `/tools/icons/static/icons/${url}`, 
        path.join(DOWNLOAD_TMP_DIR, this.theme, `${ic.id}.svg`)
      ).catch(err => {
        console.log(`error occur for icon: ${ic.id}`, err);
      });
    })).then(() => {
      console.log(this._i + ' / ' + this.icons.length);
      this.schedule();
    }, err => {
      this._rej(err);
    });
  }
}

const THEMES = ['baseline', 'outline', 'round', 'sharp', 'twotone'];

(async function() {
  await fs.remove(DOWNLOAD_TMP_DIR);
  await fs.mkdirp(DOWNLOAD_TMP_DIR);
  const json = (await download('/tools/icons/static/data.json')).toString();
  const data = JSON.parse(json);
  let icons = [];
  data.categories.forEach(cat => {
    icons = icons.concat(cat.icons);
  });
  console.log(`${icons.length} icons to download.`);
  for(let i = 0; i < THEMES.length; i++) {
    await fs.mkdirp(path.join(DOWNLOAD_TMP_DIR, THEMES[i]));
    const downer = new Downloader(icons, THEMES[i]);
    console.log(`downloading ${THEMES[i]} icons...`);
    await downer.run();
    console.log(`finish downloading ${THEMES[i]} icons`);
  }
})().catch(err => {
  console.error(err);
});

