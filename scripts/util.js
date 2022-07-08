const { promises: fs } = require('fs');
const path = require('path');

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

async function glob(dir, filterRegex) {
  const subs = await fs.readdir(dir);
  let files = [];
  for await (const sub of subs) {
    if (filterRegex.test(sub)) {
      files.push(path.join(dir, sub));
    } else if (!/\./.test(sub)) {
      files = files.concat(await glob(path.join(dir, sub), filterRegex));
    }
  }
  return files;
}

async function exist(filepath) {
  try {
    await fs.access(filepath);
    return true;
  } catch (ex) {
    return false;
  }
}

module.exports = {
  mkdirp,
  glob,
  exist,
};
