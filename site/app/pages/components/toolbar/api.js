import {
  VM,
  _t
} from 'jinge';

export default () => VM({
  regular: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'elevation',
          type: 'String|Number',
          description: _t('设置工具栏的阴影（Elevation）'),
          defaults: '4'
        }
      ]
    },
    classes: {
      headings: [_t('名称'), _t('描述')],
      props: [
        {
          name: 'md-transparent',
          description: _t('使用透明工具栏')
        },
        {
          name: 'md-dense',
          description: _t('使用紧凑型布局')
        },
        {
          name: 'md-medium',
          description: _t('使用中等大小的工具栏')
        },
        {
          name: 'md-large',
          description: _t('使用大型工具栏')
        }
      ]
    }
  },
  elements: {
    classes: {
      headings: [_t('名称'), _t('描述')],
      props: [
        {
          name: 'md-toolbar-row',
          description: _t('创建工具栏行，通常在大型工具栏上使用')
        },
        {
          name: 'md-toolbar-offset',
          description: _t('向任何工具栏行添加左偏移量，仅适用于 md-toolbar-row。')
        },
        {
          name: 'md-toolbar-section-start',
          description: _t('在工具栏或工具栏行的左侧创建一个区域，该区域通常用于放置应用程序菜单按钮和标题。')
        },
        {
          name: 'md-toolbar-section-end',
          description: _t('在工具栏或工具栏行的右侧创建一个区域，该区域通常用于放置工具栏的主要动作，例如更多操作的按钮。')
        },
        {
          name: 'md-title',
          description: _t('创建工具栏的标题。')
        }
      ]
    }
  }
});
