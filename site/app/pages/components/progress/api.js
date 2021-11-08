import { vm, _t } from 'jinge';

export default () =>
  vm({
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'mode',
          type: 'String',
          description: _t('设置进度条的模式。请参见下面每种模式的详细说明。'),
          defaults: 'determinate',
        },
        {
          offset: true,
          name: 'mode="determinate"',
          type: 'String',
          description: _t('默认模式，与 <code>md-value</code> 属性一起使用。指定 0％ 到 100％ 之间的某个进度。'),
          defaults: '-',
        },
        {
          offset: true,
          name: 'mode="indeterminate"',
          type: 'String',
          description: _t('创建一个不指定具体进度，持续加载状态的进度条'),
          defaults: '-',
        },
        {
          offset: true,
          name: 'mode="query"',
          type: 'String',
          description: _t('创建用于提示正在查询的进度条。在检索大量内容时很有用。'),
          defaults: '-',
        },
        {
          offset: true,
          name: 'mode="buffer"',
          type: 'String',
          description: _t('创建带有缓冲区的进度条，常用于指示视频加载进度。'),
          defaults: '-',
        },
        {
          name: 'value',
          type: 'Number',
          description: _t('当前进度的值，支持 0 到 100 的数字。'),
          defaults: 'null',
        },
        {
          name: 'buffer',
          type: 'Number',
          description: _t('当前缓冲量的值，支持 0 到 100 的数字。'),
          defaults: 'null',
        },
      ],
    },
  });
