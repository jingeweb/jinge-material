import {
  _t,
  VM
} from 'jinge';

export default () => VM({
  props: {
    headings: [_t('名称'), _t('描述'), _t('默认值')],
    props: [
      {
        name: 'value',
        type: 'Date|Number|String',
        description: _t('绑定所选日期的值'),
        defaults: 'null'
      },
      {
        name: 'disabledDates',
        type: 'Function',
        description: _t('禁用日期。必须是接受4个参数（年，月，日，星期几）的函数。'),
        defaults: 'null'
      },
      {
        name: 'openOnFocus',
        type: 'Boolean',
        description: _t('禁用焦点事件，仅在用户单击图标时打开。'),
        defaults: 'true'
      },
      {
        name: 'immediately',
        type: 'Boolean',
        description: _t('选择日期而不进行确认，然后立即关闭对话框。'),
        defaults: 'false'
      },
      {
        name: 'overrideNative',
        type: 'Boolean',
        description: _t('通过将输入类型更改为文本来覆盖原生的日期选择器。'),
        defaults: 'true'
      },
      {
        name: 'inputDebounce',
        type: 'Number',
        description: _t('防反跳纯文本到日期对象的转换。如果您的用户输入速度较慢，则设置为较长的时间；如果用户的输入速度非常快，则设置为较短的时间。'),
        defaults: 1000
      }
    ]
  },
  events: {
    headings: [_t('名称'), _t('描述'), _t('参数')],
    props: [
      {
        name: 'change',
        description: _t('选择/单击日期选择器日期时触发'),
        value: 'value of Date'
      },
      {
        name: 'confirm',
        description: _t('单击确认按钮时触发'),
        value: 'value of selected Date'
      },
      {
        name: 'opened',
        description: _t('当日期选择器对话框打开时触发'),
        value: 'null'
      },
      {
        name: 'closed',
        description: _t('当日期选择器对话框关闭时触发'),
        value: 'null'
      }
    ]
  }
});
