import {
  _t,
  vm
} from 'jinge';

export default () => vm({
  dialog: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'active',
          type: 'Boolean',
          description: _t('控制对话框的打开和关闭'),
          defaults: 'false'
        },
        {
          name: 'backdrop',
          type: 'Boolean',
          description: _t('是否启用叠加的灰色蒙层'),
          defaults: 'true'
        },
        {
          name: 'closeOnEsc',
          type: 'Boolean',
          description: _t('默认情况下，按 esc 时对话框将关闭。设置为 false 可取消此行为。'),
          defaults: 'true'
        },
        {
          name: 'closeOnOutsideClick',
          type: 'Boolean',
          description: _t('默认情况下，单击外部时该对话框将关闭。设置为 false 可取消此行为。'),
          defaults: 'true'
        },
        {
          name: 'fullscreen',
          type: 'Boolean',
          description: _t('控制该对话框将在移动屏幕上是否会变为全屏。'),
          defaults: 'true'
        }
      ]
    },
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'open',
          description: _t('对话框打开时触发'),
          value: 'null'
        },
        {
          name: 'close',
          description: _t('对话框关闭时触发'),
          value: 'null'
        },
        {
          name: 'click-overlay',
          description: _t('在叠加层外点击时触发'),
          value: 'null'
        }
      ]
    }
  },
  alert: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'title',
          type: 'String',
          description: _t('通知对话框的标题'),
          defaults: 'null'
        },
        {
          name: 'content',
          type: 'String',
          description: _t('通知对话框的内容。支持 html。'),
          defaults: 'null'
        },
        {
          name: 'confirmText',
          type: 'String',
          description: _t('确认按钮的文案'),
          defaults: _t('确认')
        }
      ]
    }
  },
  confirm: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'title',
          type: 'String',
          description: _t('确认对话框的标题'),
          defaults: 'null'
        },
        {
          name: 'content',
          type: 'String',
          description: _t('确认对话框的内容。支持 html。'),
          defaults: 'null'
        },
        {
          name: 'confirmText',
          type: 'String',
          description: _t('确认按钮的文案'),
          defaults: _t('确认')
        },
        {
          name: 'cancelText',
          type: 'String',
          description: _t('取消按钮的文案'),
          defaults: _t('取消')
        },
        {
          name: 'confirmSpinner',
          type: 'Boolean',
          description: _t('确认按钮是否处于加载状态。当该参数为 true 时，确认按钮会展示 md-spinner，并处于 disabled 状态。'),
          defaults: 'false'
        }
      ]
    },
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'confirm',
          description: _t('点击确认按钮时触发'),
          value: 'null'
        },
        {
          name: 'cancel',
          description: _t('点击取消按钮时触发'),
          value: 'null'
        }
      ]
    }
  },
  prompt: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'defaultValue',
          type: 'Any',
          description: _t('输入框的默认值'),
          defaults: 'null'
        },
        {
          name: 'inputRequired',
          type: 'Boolean',
          description: _t('输入框是否必须填写'),
          defaults: 'false'
        },
        {
          name: 'inputMaxLength',
          type: 'Number',
          description: _t('可选参数，指定输入框的最大允许字符数'),
          defaults: 'null'
        },
        {
          name: 'inputPlaceholder',
          type: 'Number',
          description: _t('输入框的占位提示信息'),
          defaults: 'null'
        },
        {
          name: 'title',
          type: 'String',
          description: _t('对话框的标题'),
          defaults: 'null'
        },
        {
          name: 'confirmText',
          type: 'String',
          description: _t('确认按钮的文案'),
          defaults: _t('确认')
        },
        {
          name: 'cancelText',
          type: 'String',
          description: _t('取消按钮的文案'),
          defaults: _t('取消')
        },
        {
          name: 'confirmSpinner',
          type: 'Boolean',
          description: _t('确认按钮是否处于加载状态。当该参数为 true 时，确认按钮会展示 md-spinner，并处于 disabled 状态。'),
          defaults: 'false'
        }
      ]
    },
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'confirm',
          description: _t('点击确认按钮时触发'),
          value: 'inputValue'
        },
        {
          name: 'cancel',
          description: _t('点击取消按钮时触发'),
          value: 'null'
        }
      ]
    }
  }
});
