const { promises: fs } = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sass = require('sass');
const { TemplateParser, ComponentParser } = require('jinge-compiler');
const { IconAlias } = require('jinge-symbols/compiler');
const esbuild = require('esbuild');
const chokidar = require('chokidar');
const { mkdirp, exist, glob } = require('./util');

const WATCH = process.env.WATCH === 'true';
const SRC_DIR = path.resolve(__dirname, '../src');
const DIST_DIR = path.resolve(__dirname, '../lib');
const DIST_STYLE_DIR = path.resolve(__dirname, '../style');

TemplateParser.aliasManager.initialize(IconAlias);

async function transformFile(file) {
  const rf = path.relative(SRC_DIR, file);
  const src = await fs.readFile(file, 'utf-8');
  let { code, map, warnings } = await esbuild.transform(src, {
    target: 'es2020',
    format: 'esm',
    charset: 'utf8',
    loader: path.extname(file).slice(1),
    sourcemap: true,
    sourcefile: `${path.relative(file, SRC_DIR)}/src/${rf}`,
    sourcesContent: false,
  });
  if (warnings?.length) console.error(warnings);
  if (!code) return; // ignore empty file
  if (rf.startsWith('_sref') || !rf.startsWith('_')) {
    console.log('  -> ', rf);
    const result = ComponentParser.parse(code, null, {
      resourcePath: file,
    });
    code = result.code.replace(/"([^"]+)\.html"/g, (m0, m1) => `"${m1}.tpl.js"`);
    const styleIdxFile = path.join(path.dirname(file), 'style', 'index.scss');
    if (/^[\w-]+\/index\.ts$/.test(rf) && (await exist(styleIdxFile))) {
      code = "import './style/index.js';" + code;
    }
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
  const result = TemplateParser.parse(cnt, {
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
async function transformScss(file) {
  const result = await sass.compileAsync(file);
  return result.css;
}
async function handleChange(file) {
  if (!/\.(ts|html|scss)$/.test(file)) return;
  let fn = path.relative(SRC_DIR, file);
  try {
    if (fn.endsWith('.scss')) {
      if (fn.startsWith('_style/theme/')) {
        // console.log('todo');
      } else if (fn.startsWith('_style/')) {
        execSync(`cp ${file} ${path.join(DIST_STYLE_DIR, fn.replace('_style/', '/'))}`);
        fn = '_style/index.scss';
        const css = await transformScss(path.join(SRC_DIR, fn));
        await fs.writeFile(path.join(DIST_STYLE_DIR, 'index.css'), css);
      } else {
        fn = path.join(path.dirname(fn), 'index.scss');
        const css = await transformScss(path.join(SRC_DIR, fn));
        await fs.writeFile(path.join(DIST_DIR, fn.replace('.scss', '.css')), css);
      }
    } else if (file.endsWith('.ts')) {
      await transformFile(file);
    } else if (file.endsWith('.html')) {
      await transformTpl(file);
    }
    console.log(fn, 'compiled.');
  } catch (ex) {
    console.error(fn, 'failed.');
    console.error(ex.toString());
  }
}

function watchFiles() {
  console.log('Continue watching...');
  chokidar
    .watch(path.join(SRC_DIR, '**/*.{ts,html,scss}'), {
      ignoreInitial: true,
    })
    .on('add', (file) => handleChange(file))
    .on('change', (file) => handleChange(file));
}

(async () => {
  if (process.env.ONLY_WATCH) {
    watchFiles();
    return;
  }
  console.log('Trasnform scripts...');
  const files = await glob(SRC_DIR, /\.(ts|html)$/);
  for await (const file of files) {
    if (file.endsWith('.ts')) {
      await transformFile(file);
    } else if (file.endsWith('.html')) {
      await transformTpl(file);
    }
  }

  console.log('Transform styles...');
  const DIST_STYLE_DIR = path.join(DIST_DIR, '_style');
  await mkdirp(DIST_STYLE_DIR);
  execSync(`cp -r ${path.join(SRC_DIR, '_style')}/* ${DIST_STYLE_DIR}`);

  const themes = await fs.readdir(path.join(SRC_DIR, '_style/theme'));
  const SCSS_FILES = ['index.scss', ...themes.map((theme) => `theme/${theme}/index.scss`)];

  for await (const f of SCSS_FILES) {
    const css = await transformScss(path.join(SRC_DIR, '_style', f));
    await fs.writeFile(path.join(DIST_STYLE_DIR, f.replace('.scss', '.css')), css);
    console.log('  -> _style/' + f);
  }

  const comps = (await fs.readdir(SRC_DIR)).filter((v) => v === '_sref' || !v.startsWith('_'));
  for await (const comp of comps) {
    const styleIdxFile = path.join(SRC_DIR, comp, 'style', 'index.scss');
    const styleDistDir = path.join(DIST_DIR, comp, 'style');
    if (!(await exist(styleIdxFile))) {
      continue;
    }
    await mkdirp(styleDistDir);
    const css = await transformScss(styleIdxFile);
    await Promise.all([
      fs.writeFile(path.join(styleDistDir, 'index.css'), css),
      fs.writeFile(path.join(styleDistDir, 'index.js'), `\nimport './index.css';\n`),
    ]);
    console.log(`  -> ${comp}/style/index.scss`);
  }
  console.log('Build finished.');
  if (WATCH) {
    watchFiles();
  }
})().catch((err) => {
  console.error(err);
  process.exit(-1);
});
