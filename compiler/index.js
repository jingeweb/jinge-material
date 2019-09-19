const path = require('path');
const createDefaultIconThemeAlias = require('./alias');

const fieldComponentBase = {
  BaseField: path.resolve(__dirname, '../src/field/base.js')
};

module.exports = {
  jingeMaterialFieldBase: fieldComponentBase,
  jingeMaterialAlias: createDefaultIconThemeAlias(),
  jingeMaterialAliasWithDefaultIconTheme: createDefaultIconThemeAlias
};
