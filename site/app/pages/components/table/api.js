import { vm, _t } from 'jinge';

export default () =>
  vm({
    table: {
      props: {
        headings: [_t('名称'), _t('描述'), _t('默认值')],
        props: [
          {
            name: 'data',
            type: 'Array',
            description: _t('指定表格的数据。必须是数组，数组每个元素是一行数据。'),
            defaults: 'null',
          },
          {
            name: 'selectable',
            type: 'Boolean',
            description: _t('表格是否开启可选择模式。'),
            defaults: 'false',
          },
          {
            name: 'selection',
            type: 'Array',
            description: _t('当表格处于可选择模式时，指定表格的已选择行。'),
            defaults: 'null',
          },
          {
            name: 'rowLoopKey',
            type: 'String',
            description: _t('传递给行循环使用的 <code>&lt;for&gt;</code> 组件的 key。'),
            defaults: 'index',
          },
          {
            name: 'columnLoopKey',
            type: 'String',
            description: _t('传递给列循环使用的 <code>&lt;for&gt;</code> 组件的 key。'),
            defaults: 'index',
          },
        ],
      },
      events: {
        headings: [_t('名称'), _t('描述'), _t('参数')],
        props: [
          {
            name: 'select',
            description: _t('表格的选中行发生变化时触发。只在表格开启选择模式时有效。'),
            value: 'selection',
          },
        ],
      },
    },
    column: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'label',
          description: _t('表头的文本。可以不指定该属性，然后用 slot 来渲染自定义表头。'),
          defaults: 'an empty string',
        },
        {
          name: 'prop',
          description: _t(
            '数据的属性。用于从行数据中获取属性值并展示到单元格里。可以不指定该属性，然后用 slot 来渲染自定义单元格。',
          ),
          defaults: 'an empty string',
        },
        {
          name: 'numberic',
          description: _t('指定当前列是否是数值类型。数值类型的列会右对齐。'),
          defaults: 'false',
        },
      ],
    },
  });
