import {
  _t,
  VM
} from 'jinge';

export default () => VM({
  dialog: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'active',
          type: 'Boolean',
          description: 'Whether to show/hide the dialog.',
          defaults: 'false'
        },
        {
          name: 'backdrop',
          type: 'Boolean',
          description: 'Enable/disable the dialog overlay',
          defaults: 'true'
        },
        {
          name: 'closeOnEsc',
          type: 'Boolean',
          description: 'By the default the dialog will close when pressing esc. To disabled that, just set this prop as false',
          defaults: 'true'
        },
        {
          name: 'closeOnOutsideClick',
          type: 'Boolean',
          description: 'By the default the dialog will close when clicking outsite. To disabled that, just set this prop as false',
          defaults: 'true'
        },
        {
          name: 'fullscreen',
          type: 'Boolean',
          description: 'The dialog will become fullscreen on mobile screens. This option can disable this behavior.',
          defaults: 'true'
        }
      ]
    },
    events: {
      headings: ['Name', 'Description', 'Value'],
      props: [
        {
          name: 'open',
          description: 'Triggered when a dialog opens',
          value: 'null'
        },
        {
          name: 'close',
          description: 'Triggered when a dialog closes',
          value: 'null'
        },
        {
          name: 'click-overlay',
          description: 'Triggered when clicked outside overlay',
          value: 'null'
        }
      ]
    }
  },
  alert: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'title',
          type: 'String',
          description: 'The alert title. Optional.',
          defaults: 'null'
        },
        {
          name: 'content',
          type: 'String',
          description: 'The alert content. Accepts HTML. Optional.',
          defaults: 'null'
        },
        {
          name: 'confirmText',
          type: 'String',
          description: 'The text inside confirm button',
          defaults: 'Ok'
        }
      ]
    }
  },
  confirm: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'title',
          type: 'String',
          description: 'The alert title. Optional.',
          defaults: 'null'
        },
        {
          name: 'content',
          type: 'String',
          description: 'The alert content. Accepts HTML. Optional.',
          defaults: 'null'
        },
        {
          name: 'confirmText',
          type: 'String',
          description: 'The text inside confirm button',
          defaults: 'Ok'
        },
        {
          name: 'cancelText',
          type: 'String',
          description: 'The text inside cancel button',
          defaults: 'Cancel'
        },
        {
          name: 'confirmSpinner',
          type: 'Boolean',
          description: 'Confirm 按钮是否处于加载状态。当该参数为 true 时，Confirm 按钮会展示 spinner 图标并处于 disabled 状态。',
          defaults: 'false'
        }
      ]
    },
    events: {
      headings: ['Name', 'Description', 'Value'],
      props: [
        {
          name: 'confirm',
          description: 'Triggered when the confirm button receives a click',
          value: 'null'
        },
        {
          name: 'cancel',
          description: 'Triggered when the user dismiss the dialog',
          value: 'null'
        }
      ]
    }
  },
  prompt: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'defaultValue',
          type: 'Any',
          description: 'The default input prompt value',
          defaults: 'null'
        },
        {
          name: 'inputName',
          type: 'String',
          description: 'The input name attribute',
          defaults: 'null'
        },
        {
          name: 'inputId',
          type: 'String',
          description: 'The input id attribute',
          defaults: 'null'
        },
        {
          name: 'inputMaxLength',
          type: 'Number',
          description: 'Enables the character count, based on the given value.',
          defaults: 'null'
        },
        {
          name: 'inputPlaceholder',
          type: 'Number',
          description: 'Sets a optional placeholder on input.',
          defaults: 'null'
        },
        {
          name: 'title',
          type: 'String',
          description: 'The alert title. Optional.',
          defaults: 'null'
        },
        {
          name: 'content',
          type: 'String',
          description: 'The alert content. Accepts HTML. Optional.',
          defaults: 'null'
        },
        {
          name: 'confirmText',
          type: 'String',
          description: 'The text inside confirm button',
          defaults: 'Ok'
        },
        {
          name: 'cancelText',
          type: 'String',
          description: 'The text inside cancel button',
          defaults: 'Cancel'
        }
      ]
    },
    events: {
      headings: ['Name', 'Description', 'Value'],
      props: [
        {
          name: 'confirm',
          description: 'Triggered when the confirm button receives a click',
          value: 'Input Value'
        },
        {
          name: 'cancel',
          description: 'Triggered when the user dismiss the dialog',
          value: 'null'
        }
      ]
    }
  }
});
