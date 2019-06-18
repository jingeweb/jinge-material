const iconsAlias = require('./_auto_generated_icons_alias');

module.exports = function createDefaultIconThemeAlias(theme = 'baseline') {
  const prefix = `Icon${theme.toLowerCase().replace(/./, m => m.toUpperCase())}`;
  const themeIconAlias = {};
  Object.keys(iconsAlias).forEach(libPath => {
    const libAlias = Object.assign({}, iconsAlias[libPath]);
    Object.keys(libAlias).forEach(component => {
      if (!component.startsWith(prefix)) return;
      const alias = libAlias[component];
      libAlias[component] = [
        `md-icon-${alias.split('-').pop()}`,
        alias
      ];
    });
    themeIconAlias[libPath] = libAlias;
  });
  return Object.assign({
    'jinge-material/src/button': {
      Button: 'md-button',
    },
    'jinge-material/src/icon': {
      Icon: 'md-icon',
    },
    'jinge-material/src/checkbox': {
      Checkbox: 'md-checkbox'
    },
    'jinge-material/src/overlay': {
      Overlay: 'md-overlay'
    },
    'jinge-material/src/radio': {
      Radio: 'md-radio'
    },
    'jinge-material/src/switch': {
      Switch: 'md-switch'
    },
    'jinge-material/src/content': {
      Content: 'md-content',
    },
    'jinge-material/src/ripple': {
      Ripple: 'md-ripple',
      Wave: 'md-wave'
    },
    'jinge-material/src/portal': {
      Portal: 'md-portal'
    },
    'jinge-material/src/spinner': {
      Spinner: 'md-spinner'
    },
    'jinge-material/src/progress': {
      Progress: 'md-progress-bar'
    },
    'jinge-material/src/toolbar': {
      Toolbar: 'md-toolbar'
    },
    'jinge-material/src/dialog': {
      Dialog: 'md-dialog',
      DialogTitle: 'md-dialog-title',
      DialogContent: 'md-dialog-content',
      DialogActions: 'md-dialog-actions',
      DialogAlert: 'md-dialog-alert',
      DialogConfirm: 'md-dialog-confirm',
      DialogPrompt: 'md-dialog-prompt'
    },
    'jinge-material/src/popover': {
      Popover: 'md-popover'
    },
    'jinge-material/src/popconfirm': {
      Popconfirm: 'md-popconfirm'
    },
    'jinge-material/src/tooltip': {
      Tooltip: 'md-tooltip'
    }
  }, themeIconAlias);
};
