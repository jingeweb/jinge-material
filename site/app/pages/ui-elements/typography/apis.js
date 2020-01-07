import {
  _t,
  vm
} from 'jinge';

export default () => vm({
  classes: {
    headings: [_t('名称'), _t('描述')],
    props: [
      {
        name: 'md-headline-1',
        description: _t('对应于 Material Design 设计规范中的 Headline 1 样式。')
      },
      {
        name: 'md-headline-2',
        description: _t('对应于 Material Design 设计规范中的 Headline 2 样式。')
      },
      {
        name: 'md-headline-3',
        description: _t('对应于 Material Design 设计规范中的 Headline 3 样式。')
      },
      {
        name: 'md-headline-4',
        description: _t('对应于 Material Design 设计规范中的 Headline 4 样式。')
      },
      {
        name: 'md-headline-5',
        description: _t('对应于 Material Design 设计规范中的 Headline 5 样式。')
      },
      {
        name: 'md-headline-6',
        description: _t('对应于 Material Design 设计规范中的 Headline 6 样式。')
      },
      {
        name: 'md-subtitle-1',
        description: _t('对应于 Material Design 设计规范中的 Subtitle 1 样式。')
      },
      {
        name: 'md-subtitle-2',
        description: _t('对应于 Material Design 设计规范中的 Subtitle 2 样式。')
      },
      {
        name: 'md-body-1',
        description: _t('对应于 Material Design 设计规范中的 Body 1 样式。')
      },
      {
        name: 'md-body-2',
        description: _t('对应于 Material Design 设计规范中的 Body 2 样式。')
      },
      {
        name: 'md-caption',
        description: _t('对应于 Material Design 设计规范中的 Caption 样式。')
      }
    ]
  }
});
