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
        type: 'Any',
        description: _t('多选框的值'),
        defaults: 'false'
      },
      {
        name: 'trueValue',
        type: 'Any',
        description: _t('选中状态下的值'),
        defaults: 'true'
      },
      {
        name: 'falseValue',
        type: 'Any',
        description: _t('未选中状态下的值'),
        defaults: 'false'
      },
      {
        name: 'id',
        type: 'String',
        description: _t('多选框的唯一标识'),
        defaults: 'a random string'
      }
    ]
  },
  events: {
    headings: [_t('名称'), _t('描述'), _t('参数')],
    props: [
      {
        name: 'change',
        description: _t('多选框的值发生变化时触发'),
        value: 'value'
      }
    ]
  }
});
