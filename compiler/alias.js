const iconsAlias = require('./_auto_generated_icons_alias');

module.exports = function createDefaultIconThemeAlias(theme = 'baseline') {
  const prefix = `Icon${theme.toLowerCase().replace(/./, m => m.toUpperCase())}`;
  const themeIconAlias = Object.assign({}, iconsAlias);
  Object.keys(iconsAlias).forEach(cn => {
    if (!cn.startsWith(prefix)) return;
    const tag = iconsAlias[cn];
    themeIconAlias[cn] = [`md-icon-${tag.split('-').pop()}`, tag];
  });
  return {
    'jinge-material': Object.assign({
      Button: 'md-button',
      Icon: 'md-icon',
      Checkbox: 'md-checkbox',
      Radio: 'md-radio',
      Switch: 'md-switch',
      Content: 'md-content',
      Toolbar: 'md-toolbar',
      Dialog: 'md-dialog',
      DialogTitle: 'md-dialog-title',
      DialogContent: 'md-dialog-content',
      DialogActions: 'md-dialog-actions',
      DialogAlert: 'md-dialog-alert',
      DialogConfirm: 'md-dialog-confirm',
      DialogPrompt: 'md-dialog-prompt'
    }, themeIconAlias)
  };
};
