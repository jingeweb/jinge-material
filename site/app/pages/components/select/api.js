import {
  VM,
  _t
} from 'jinge';

export default () => VM({
  select: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'value',
          type: 'Any',
          description: _t('绑定到下拉选择组件的值'),
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
          type: 'String',
          description: _t('指定是否必须选择一项'),
          defaults: 'null'
        },
        {
          name: 'id',
          type: 'String',
          description: _t('唯一标识'),
          defaults: 'null'
        },
        {
          name: 'disabled',
          type: 'Boolean',
          description: _t('禁用下拉选择组件'),
          defaults: 'false'
        },
        {
          name: 'multiple',
          type: 'Boolean',
          description: _t('创建一个带有复选框的多重选择。需要搭配传递 <code>Array</code> 类型的 <code>value</code> 属性。'),
          defaults: 'false'
        },
        {
          name: 'dense',
          type: 'Boolean',
          description: _t('使用紧凑型布局'),
          defaults: 'false'
        }
      ]
    },
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'change',
          description: _t('选项发生变化时触发'),
          value: 'value'
        },
        {
          name: 'opened',
          description: _t('下拉框打开时触发'),
          value: '-'
        },
        {
          name: 'closed',
          description: _t('下拉框关闭时触发'),
          value: '-'
        }
      ]
    }
  },
  option: {
    headings: [_t('名称'), _t('描述'), _t('默认值')],
    props: [
      {
        name: 'value',
        type: 'Any',
        description: _t('单个选择项的值。'),
        defaults: 'null'
      },
      {
        name: 'disabled',
        type: 'Boolean',
        description: _t('禁用单个选择项'),
        defaults: 'false'
      }
    ]
  },
  optgroup: {
    headings: [_t('名称'), _t('描述'), _t('默认值')],
    props: [
      {
        name: 'label',
        type: 'String',
        description: _t('分组的标签'),
        defaults: 'null'
      },
      {
        name: 'disabled',
        type: 'Boolean',
        description: _t('禁用分组并阻止选择其中的所有选择项。'),
        defaults: 'false'
      }
    ]
  }
});
