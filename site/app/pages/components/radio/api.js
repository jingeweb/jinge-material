import { vm, _t } from 'jinge';

export default () =>
  vm({
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'value',
          type: 'Any',
          description: _t('点击选中时通过 change 事件向外传递的值'),
          defaults: 'undefined',
        },
        {
          name: 'checked',
          type: 'Boolean',
          description: _t('是否为选中状态'),
          defaults: 'false',
        },
        {
          name: 'id',
          type: 'String',
          description: _t('唯一标识'),
          defaults: 'a random string',
        },
        {
          name: 'name',
          type: 'String',
          description: _t('用于标识分组的 name，会传递给原生 input，实现多个 radio 关联'),
          defaults: 'a empty string',
        },
      ],
    },
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'change',
          description: _t('选中的值变化时触发'),
          value: 'value',
        },
      ],
    },
  });
