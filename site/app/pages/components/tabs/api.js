import { vm, _t } from 'jinge';

export default () =>
  vm({
    tabs: {
      props: {
        headings: [_t('名称'), _t('描述'), _t('默认值')],
        props: [
          {
            name: 'activeTab',
            type: 'String|Number',
            description: _t(
              '设置当前激活状态的标签页。可以指定为数字索引，也可以指定为 <code>md-tab</code> 组件的 id 属性值。',
            ),
            defaults: 'null',
          },
          {
            name: 'alignment',
            type: 'String',
            description: _t('设置标签页的对齐方式。请参见下面每种布局的详细说明。'),
            defaults: 'left',
          },
          {
            offset: true,
            name: 'alignment="left"',
            type: 'String',
            description: _t('使用左对齐'),
            defaults: '-',
          },
          {
            offset: true,
            name: 'alignment="center"',
            type: 'String',
            description: _t('使用居中对齐'),
            defaults: '-',
          },
          {
            offset: true,
            name: 'alignment="right"',
            type: 'String',
            description: _t('使用右对齐'),
            defaults: '-',
          },
          {
            offset: true,
            name: 'alignment="fixed"',
            type: 'String',
            description: _t('标签页撑满屏幕可用空间'),
            defaults: '-',
          },
          {
            name: 'dynamicHeight',
            type: 'Boolean',
            description: _t('指定工具栏高度使用动态过渡。请谨慎使用使用此选项，以免降低页面性能。'),
            defaults: 'false',
          },
          {
            name: 'elevation',
            type: 'Number',
            description: _t('为标签页指定阴影(Elevation)，默认无阴影。'),
            defaults: '0',
          },
        ],
      },
      events: {
        headings: [_t('名称'), _t('描述'), _t('参数')],
        props: [
          {
            name: 'changed',
            description: _t('当激活的标签页变化时触发。'),
            value: '(index, tab)',
          },
        ],
      },
    },
    tab: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'id',
          type: 'String',
          description: _t('唯一标识，可用于配合 active 属性指定激活的标签页。'),
          defaults: 'a random string',
        },
        {
          name: 'href',
          type: 'String',
          description: _t('为标签页添加 html 超链接。'),
          defaults: 'null',
        },
        {
          name: 'label',
          type: 'String',
          description: _t('标签页的文本'),
          defaults: 'null',
        },
        {
          name: 'disabled',
          type: 'Boolean',
          description: _t('禁用某个标签页'),
          defaults: 'null',
        },
        {
          name: 'to',
          type: 'String',
          description: _t('为标签页添加 jinge-router 的路由功能，指定目标路由状态。'),
          defaults: 'null',
        },
        {
          name: 'data',
          type: 'Object',
          description: _t('附加给标签页的额外数据。可用于传递给标签页内容的渲染 Slot。'),
          defaults: 'null',
        },
      ],
    },
  });
