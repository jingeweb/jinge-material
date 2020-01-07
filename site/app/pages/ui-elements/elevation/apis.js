import {
  _t,
  vm
} from 'jinge';

export default () => vm({
  classes: {
    headings: [_t('名称'), _t('描述')],
    props: [
      {
        name: 'md-elevation-[depth]',
        description: _t('为元素添加阴影（Elevation），深度可以是 1、2、3、4、6、8、12、16 或 24，例如：md-elevation-4。')
      }
    ]
  }
});
