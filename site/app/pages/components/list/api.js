import { vm, _t } from 'jinge';

export default () =>
  vm({
    list: {
      props: {
        headings: [_t('名称'), _t('描述'), _t('默认值')],
        props: [
          {
            name: 'expandSingle',
            type: 'Boolean',
            description: _t(
              '如果设置为 true，则一个列表最多只能有一个列表项展开。当展开另一个列表项时，原先展开的列表项将被折叠',
            ),
            defaults: 'false',
          },
        ],
      },
      classes: {
        headings: [_t('名称'), _t('描述')],
        props: [
          {
            name: 'md-dense',
            description: _t('使用紧凑型布局'),
          },
          {
            name: 'md-double-line',
            description: _t('双行列表可以更好地显示有关单个项目的其他信息'),
          },
          {
            name: 'md-triple-line',
            description: _t('三行列表适合显示项目的全部内容的预览'),
          },
        ],
      },
    },
    item: {
      props: {
        headings: [_t('名称'), _t('描述'), _t('默认值')],
        props: [
          {
            name: 'expand',
            type: 'Boolean',
            description: _t('启用可展开面板'),
            defaults: 'false',
          },
          {
            name: 'expanded',
            type: 'Boolean',
            description: _t('控制面板的展开和关闭'),
            defaults: 'false',
          },
        ],
      },
    },
  });
