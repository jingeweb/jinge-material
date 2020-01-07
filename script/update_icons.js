const path = require('path');
const fs = require('fs-extra');
const https = require('https');
const HttpsProxyAgent = require('https-proxy-agent');
const slog = require('single-line-log').stdout;

const INCLUDE_ICONS = process.env.INCLUDE;
const LIMIT = process.env.LIMIT;
// const INCLUDE_ICONS = `sports_volleyball,sports_soccer,stay_primary_portrait,stay_current_portrait,stop,stop_screen_share,storage,store,store_mall_directory,storefront,straighten,streetview,strikethrough_s,style,subdirectory_arrow_left,subdirectory_arrow_right,subject,subscriptions,subtitles,subway,supervised_user_circle,supervisor_account,surround_sound,swap_calls,swap_horiz,swap_horizontal_circle,swap_vert,swap_vertical_circle,switch_camera,switch_video,sync,sync_alt,sync_disabled,sync_problem,system_update,system_update_alt,tab,tab_unselected,table_chart,tablet,tablet_android,tablet_mac,tag_faces,tap_and_play,terrain,text_fields,text_format,text_rotate_up,text_rotate_vertical,text_rotation_angledown,text_rotation_angleup,text_rotation_down,text_rotation_none,textsms,texture,theaters,thumb_down,thumb_down_alt,thumb_up,sports_football,spellcheck,speed,sports_rugby,sports_tennis,square_foot,star,thumbs_up_down,time_to_leave,star_border,timelapse,timeline,timer,timer_10,timer_3,timer_off,title,toc,today,toggle_off,toggle_on,toll,tonality,touch_app,toys,track_changes,traffic,tram,train,transfer_within_a_station,transform,translate,trending_down,trending_flat,sports_golf,sports_mma,sports_esports,sports_motorsports,sports_handball,stars,trending_up,trip_origin,unfold_less,unfold_more,unsubscribe,tune,update,usb,turned_in_not,stay_primary_landscape,tv_off,tv,star_half,stay_current_landscape,vertical_align_center,vertical_align_top,vertical_split,unarchive,video_label,undo,video_library,vibration,videocam,videocam_off,videogame_asset,view_agenda,view_array,view_carousel,view_column,view_comfy,view_compact,view_day,view_headline,view_list,turned_in,view_module,view_quilt,view_stream,view_week,vignette,visibility,visibility_off,voice_chat,voice_over_off,voicemail,volume_down,volume_mute,volume_off,volume_up,vpn_key,vpn_lock,wallpaper,warning,watch,watch_later,waves,wb_auto,wb_cloudy,wb_incandescent,wb_iridescent,wb_sunny,wc,web,web_asset,whatshot,where_to_vote,widgets,wifi,wifi_lock,wifi_off,wifi_tethering,work,work_off,work_outline,wrap_text,youtube_searched_for,zoom_in,zoom_out,zoom_out_map,vertical_align_bottom,video_call,thumb_up_alt,transit_enterexit,verified_user`;// process.env.INCLUDE;
const HTTP_RPOXY = process.env.PROXY ? (process.env.PROXY === 'local' ? 'http://127.0.0.1:1087' : process.env.PROXY) : null;
const ICONS_DIR = path.resolve(__dirname, '../icons');
const ICON_ALIAS_FILE = path.resolve(__dirname, '../compiler/_auto_generated_icons_alias.js');
const PARALLEL = Number(process.env.PARALLEL || 20);

function download(host, url, fileStream) {
  // console.log(url);
  return new Promise((resolve, reject) => {
    const opts = {
      host: host,
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
  'outlined',
  'round',
  'sharp',
  'twotone'
];

class Downloader {
  constructor(meta) {
    this.host = meta.host;
    this.asset_url_pattern = meta.asset_url_pattern;
    this.icons = meta.icons;
    if (INCLUDE_ICONS) {
      const is = INCLUDE_ICONS.split(',').map(n => n.trim());
      this.icons = meta.icons.filter(ic => is.indexOf(ic.name) >= 0);
    }
    this._fails = [];
    this._t = 0; // total to download
    this._r = 0; // running
    this._n = 0; // finished
    this._i = INCLUDE_ICONS ? 0 : Number(process.env.START || 0);
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
          this.downloadIcon(this.host, this.asset_url_pattern, ic).then(() => {
            this.doneOne();
          }, err => {
            if (tries++ < 5) {
              _try();
              return;
            }
            console.log('\n\nfailed to download icon: ', ic.name, '\n  -> ', err.message || err, '\n');
            this._fails.push(ic.name);
            this.doneOne();
          });
        };
        _try();
      })(ic);
    }
  }

  async downloadIcon(host, urlTpl, ic) {
    const codes = await Promise.all(THEMES.map(theme => {
      const url = urlTpl.replace('{family}', `materialicons${theme === 'baseline' ? '' : theme}`)
        .replace('{icon}', ic.name).replace('{version}', ic.version)
        .replace('{asset}', '24px.svg') + '?download=true';
      // console.log(url);
      return download(
        host, url
      ).then(buf => {
        return {
          name: `Icon${convertCase(theme)}${convertCase(ic.name)}`,
          dul: null, // dulplicated
          dep: false,
          svg: '`\n' + buf.toString()
            .replace(/.*<?xml.*\n/, '')
            .replace(/.*<!--.*\n/, '')
            .replace(/.*fill="none".*\n/, '')
            .replace(' enable-background="new 0 0 24 24"', '')
            .replace(' xml:space="preserve"', '')
            .replace(' xmlns:xlink="http://www.w3.org/1999/xlink"', '')
            .replace('x="0px" y="0px" width="24px" height="24px"', 'width="24" height="24"')
            .replace(/\n\s*viewBox=/, ' viewBox=')
            .replace(/.+version=.+\n\s*/, '<svg ') + '`'
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
      path.join(ICONS_DIR, `${ic.name}.js`),
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
  const json = (await download('fonts.google.com', '/metadata/icons')).toString();
  // console.log(json);
  const data = JSON.parse(json.replace(/^[^{]+/, ''));

  if (LIMIT) {
    data.icons = data.icons.slice(0, Number(LIMIT));
  }

  console.log(data.host);
  // data.icons = data.icons.slice(0, 1);
  // console.log(data);
  // let icons = [];
  // data.categories.forEach(cat => {
  //   icons = icons.concat(cat.icons);
  // });

  await fs.writeFile(
    ICON_ALIAS_FILE,
    `/* This file is auto genreated by script, never change it manually. */
module.exports = {
${data.icons.map(ic => {
    return `  'jinge-material/icons/${ic.name}': {
${THEMES.map(theme => `    Icon${convertCase(theme)}${convertCase(ic.name)} : 'md-icon-${theme}-${ic.name}'`).join(',\n')}
  }`;
  }).join(',\n')}
};`);
  if (process.env.START === '-1') {
    return;
  }
  const needReset = !process.env.START && !INCLUDE_ICONS;
  if (needReset) {
    await fs.emptyDir(ICONS_DIR);
    await fs.writeFile(
      path.join(ICONS_DIR, 'README.md'),
      'Files under this directory is auto generated by script, never modify it manually.'
    );
  }
  await (new Downloader(data)).run();
})().catch(err => {
  console.error(err);
});
