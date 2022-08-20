const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const themeDir = process.argv[2];

const themeName = path.basename(themeDir);
console.log(themeName, '->', themeDir);

const cnt = fs.readFileSync(path.join(themeDir, 'tokens.css'), 'utf-8');
const tokens = {
  light: [],
  dark: [],
};
const colors = [];
cnt.split('\n').forEach((line) => {
  line = line.trim().toLowerCase();
  if (!line) return;
  if (line.startsWith('--md-source:')) {
    line = line.replace('--md-', '$md-');
    tokens.light.push(line);
    tokens.dark.push(line);
  } else if (line.startsWith('--md-ref-palette-')) {
    line = line.replace('--md-ref-', '$md-').replace(/#0{6}/g, '#000').replace(/#f{6}/g, '#fff');
    tokens.light.push(line);
    tokens.dark.push(line);
  } else if (line.startsWith('--md-sys-color-')) {
    line = line.replace('--md-sys-', '$md-').replace(/#0{6}/g, '#000').replace(/#f{6}/g, '#fff');
    if (line.indexOf('-light') >= 0) {
      line = line.replace('-light', '');
      tokens.light.push(line);
      colors.push(line.split(':')[0]);
    } else {
      line = line.replace('-dark', '');
      tokens.dark.push(line);
    }
  }
});

console.log('tokens.scss writed.');
const ElevationShadows = [
  ['0 1px 2px 0', '30%', '0 1px 3px 1px', '15%'],
  ['0 1px 2px 0', '30%', '0 2px 6px 2px', '15%'],
  ['0 1px 3px 0', '30%', '0 4px 8px 3px', '15%'],
  ['0 2px 3px 0', '30%', '0 6px 10px 4px', '15%'],
  ['0 4px 4px 0', '30%', '0 8px 12px 6px', '15%'],
];
const Elevations = new Array(5).fill(0).map((n, i) => i + 1);

['light', 'dark'].forEach((type) => {
  const outputDir = path.resolve(__dirname, '../src/_style/theme/' + themeName + '-' + type);

  execSync(`mkdir -p ${outputDir}`);
  fs.writeFileSync(
    path.join(outputDir, 'tokens.scss'),
    `@use 'sass:color';
@import '../../tokens.scss';

${tokens[type].join('\n')}
${Elevations.map(
  (level, i) =>
    `$md-color-surface-${level}: color.mix($md-color-primary, $md-color-surface, $md-surface-${level}-overlay-opacity);
$md-shadow-elevation-${level}: ${ElevationShadows[i][0]}
    rgb(#{color.red($md-color-shadow)} #{color.green($md-color-shadow)} #{color.blue($md-color-shadow)} / ${ElevationShadows[i][1]}),
  ${ElevationShadows[i][2]}
    rgb(#{color.red($md-color-shadow)} #{color.green($md-color-shadow)} #{color.blue($md-color-shadow)} / ${ElevationShadows[i][3]});`,
).join('\n')}
`,
  );

  const output = `@import '../../util.scss';
@import './tokens.scss';

:root {
${colors
  .map((vn) => {
    const cn = vn.replace('$md-', '--md-');
    return `  ${cn}: #{${vn}};\n  ${cn}-rgb: #{md-color-to-rgb(${vn})};`;
  })
  .join('\n')}
${Elevations.map(
  (level) => `  --md-color-surface-${level}: #{$md-color-surface-${level}};
  --md-shadow-elevation-${level}: #{$md-shadow-elevation-${level}};`,
).join('\n')}
}\n`;

  fs.writeFileSync(path.join(outputDir, 'index.scss'), output);
  console.log(`${type}/index.scss writed.`);
});
console.log('done.');
