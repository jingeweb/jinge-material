const { promises: fs } = require('fs');
const path = require('path');
const sass = require('sass');
const { TemplateParser, ComponentParser } = require('jinge-compiler');
const { IconAlias } = require('jinge-material-icons/compiler');
const esbuild = require('esbuild');
const chokidar = require('chokidar');
const WATCH = process.env.WATCH === 'true';
const SRC_DIR = path.resolve(__dirname, '../src');
const DIST_DIR = path.resolve(__dirname, '../lib');

TemplateParser.aliasManager.initialize(IconAlias);

async function mkdirp(dir) {
  try {
    await fs.access(dir);
    return;
  } catch (ex) {
    // continue
  }
  const pdir = path.dirname(dir);
  await mkdirp(pdir);
  await fs.mkdir(dir);
}
async function glob(dir) {
  const subs = await fs.readdir(dir);
  let files = [];
  for await (const sub of subs) {
    if (/\.(ts|html|scss)$/.test(sub)) {
      files.push(path.join(dir, sub));
    } else if (!/\./.test(sub)) {
      files = files.concat(await glob(path.join(dir, sub)));
    }
  }
  return files;
}

async function transformFile(file) {
  const rf = path.relative(SRC_DIR, file);
  const src = await fs.readFile(file, 'utf-8');
  let { code, map, warnings } = await esbuild.transform(src, {
    target: 'es2020',
    format: 'esm',

    loader: path.extname(file).slice(1),
    sourcemap: true,
    sourcefile: `${path.relative(file, SRC_DIR)}/src/${rf}`,
    sourcesContent: false,
  });
  if (warnings?.length) console.error(warnings);
  if (!code) return; // ignore empty file
  if (!rf.startsWith('_')) {
    console.log(rf);
    const result = await ComponentParser.parse(code, null, {
      resourcePath: file,
    });
    code = result.code.replace(/"([^"]+)\.html"/g, (m0, m1) => `"${m1}.tpl.js"`);
  }
  const distfile = path.join(DIST_DIR, rf.replace(/\.ts$/, '.js'));
  await mkdirp(path.dirname(distfile));
  await Promise.all([
    fs.writeFile(distfile, code + `\n//# sourceMappingURL=${path.basename(distfile) + '.map'}`),
    fs.writeFile(
      distfile + '.map',
      map.replace('"version": 3', `"version": 3,\n  "sourceRoot": "",\n  "file": "${path.basename(distfile)}"`),
    ),
  ]);
}
async function transformTpl(file) {
  const cnt = await fs.readFile(file, 'utf-8');
  const result = await TemplateParser.parse(cnt, {
    resourcePath: file,
    emitErrorFn: (err) => {
      console.error(err);
    },
    addDebugName: false,
  });
  const rf = path.relative(SRC_DIR, file).replace(/\.html$/, '.tpl.js');
  const distfile = path.join(DIST_DIR, rf);
  await mkdirp(path.dirname(distfile));
  await fs.writeFile(path.join(DIST_DIR, rf), result.code);
}
async function handleChange(file) {
  if (!/\.(ts|html|.scss)$/.test(file)) return;
  const fn = path.relative(SRC_DIR, file);
  try {
    await transformFile(file);
    console.log(fn, 'compiled.');
  } catch (ex) {
    console.error(fn, 'failed.');
    console.error(ex);
  }
}
async function transformScss(file) {
  const cnt = await fs.readFile(file, 'utf-8');
  try {
    const result = await sass.compileStringAsync(cnt);
  } catch(ex) {
    console.error('failed sass compile:', path.relative(SRC_DIR, file));
    console.error(ex);
    process.exit(-1);
  }
  const rf = path.relative(SRC_DIR, file).replace(/\.scss$/, '.css');
  const distfile = path.join(DIST_DIR, rf);
  await mkdirp(path.dirname(distfile));
  await fs.writeFile(path.join(DIST_DIR, rf), result.css);
}

(async () => {
  const files = await glob(SRC_DIR);
  for await (const file of files) {
    // if (!file.endsWith('select.ts')) continue;
    if (file.endsWith('.ts')) {
      await transformFile(file);
    } else if (file.endsWith('.html')) {
      await transformTpl(file);
    } else {
      await transformScss(file);
    }
  }
  console.log('Build finished.');
  if (!WATCH) return;
  console.log('Continue watching...');
  chokidar
    .watch(path.join(SRC_DIR, '**/*.ts'), {
      ignoreInitial: true,
    })
    .on('add', (file) => handleChange(file))
    .on('change', (file) => handleChange(file));
})().catch((err) => {
  console.error(err);
  process.exit(-1);
});
