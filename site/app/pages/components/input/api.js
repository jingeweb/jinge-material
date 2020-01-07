import {
  vm,
  _t
} from 'jinge';

export default () => vm({
  field: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'inline',
          type: 'Boolean',
          description: _t('使用内联标签，当输入获得焦点时，标签将消失。'),
          defaults: 'false'
        },
        {
          name: 'counter',
          type: 'Boolean',
          description: _t('启用字符计数器，仅适用于 input 和 textarea 等有 maxlength 属性的组件。'),
          defaults: 'false'
        },
        {
          name: 'clearable',
          type: 'Boolean',
          description: _t('在输入的右侧添加一个清除按钮。'),
          defaults: 'false'
        },
        {
          name: 'togglePassword',
          type: 'Boolean',
          description: _t('在输入的右侧添加一个切换按钮以显示/隐藏密码。仅适用于具有密码类型的 input 组件。'),
          defaults: 'false'
        }
      ]
    },
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'clear',
          description: _t('鼠标单击清除图标后触发。仅在 clearable 为 true 时才有效。'),
          value: '-'
        }
      ]
    }
  },
  input: {
    headings: [_t('名称'), _t('描述'), _t('默认值')],
    props: [
      {
        name: 'value',
        type: 'Any',
        description: _t('绑定到输入框的值'),
        defaults: 'null'
      },
      {
        name: 'type',
        type: 'String',
        description: _t('传递给原生 input 标签的 type 属性'),
        defaults: 'text'
      },
      {
        name: 'placeholder',
        type: 'String',
        description: _t('占位提示信息'),
        defaults: 'null'
      },
      {
        name: 'required',
        type: 'Boolean',
        description: _t('传递给原生 input 标签的 required 属性'),
        defaults: 'false'
      },
      {
        name: 'id',
        type: 'String',
        description: _t('唯一标识'),
        defaults: 'a random string'
      },
      {
        name: 'name',
        type: 'String',
        description: _t('传递给原生 input 标签的 name 属性'),
        defaults: 'null'
      },
      {
        name: 'disabled',
        type: 'Boolean',
        description: _t('禁用输入框'),
        defaults: 'false'
      },
      {
        name: 'maxlength',
        type: 'Number',
        description: _t('启用该字段的计数器并设置最大长度'),
        defaults: 'null'
      },
      {
        name: 'counter',
        type: 'Number|Boolean',
        description: _t('启用该字段的计数器。当您只需要一个计数器而不设置最大长度时，这很有用。设置最大长度后，如果不想显示计数器，请将此属性设置为 false'),
        defaults: 'true'
      }
    ],
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'change',
          description: _t('文本发生变化时的事件，等价于原生 input 标签的 input 事件。'),
          value: 'event'
        }
      ]
    }
  },
  textarea: {
    headings: [_t('名称'), _t('描述'), _t('默认值')],
    props: [
      {
        name: 'value',
        type: 'Any',
        description: _t('绑定到文本框的值'),
        defaults: 'null'
      },
      {
        name: 'placeholder',
        type: 'String',
        description: _t('占位提示信息'),
        defaults: 'null'
      },
      {
        name: 'required',
        type: 'Boolean',
        description: _t('传递给原生 input 标签的 required 属性'),
        defaults: 'false'
      },
      {
        name: 'id',
        type: 'String',
        description: _t('唯一标识'),
        defaults: 'a random string'
      },
      {
        name: 'name',
        type: 'String',
        description: _t('传递给原生 input 标签的 name 属性'),
        defaults: 'null'
      },
      {
        name: 'disabled',
        type: 'Boolean',
        description: _t('禁用输入框'),
        defaults: 'false'
      },
      {
        name: 'maxlength',
        type: 'Number',
        description: _t('启用该字段的计数器并设置最大长度'),
        defaults: 'null'
      },
      {
        name: 'counter',
        type: 'Number|Boolean',
        description: _t('启用该字段的计数器。当您只需要一个计数器而不设置最大长度时，这很有用。设置最大长度后，如果不想显示计数器，请将此属性设置为 false'),
        defaults: 'true'
      },
      {
        name: 'autogrow',
        type: 'Boolean',
        description: _t('文本框随录入文本自动增加高度'),
        defaults: 'false'
      }
    ],
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'change',
          description: _t('文本发生变化时的事件，等价于原生 textarea 标签的 input 事件。'),
          value: 'event'
        }
      ]
    }
  }
});
