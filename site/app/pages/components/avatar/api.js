import {
  _t,
  vm
} from 'jinge';

export default () => vm({
  regular: {
    headings: [_t('名称'), _t('描述')],
    props: [
      {
        name: 'md-avatar-icon',
        description: _t('创建可以显示图标的头像。')
      }
    ]
  },
  sizes: {
    headings: [_t('名称'), _t('描述')],
    props: [
      {
        name: 'md-small',
        description: _t('制作小头像，更改图像，图标或文字的大小。')
      },
      {
        name: 'md-large',
        description: _t('大头像，通常用于在 <md-drawer> 中展示当前用户头像。')
      }
    ]
  }
});
