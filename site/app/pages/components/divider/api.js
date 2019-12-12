import {
  _t,
  VM
} from 'jinge';

export default () => VM({
  classes: {
    headings: [_t('名称'), _t('描述')],
    props: [
      {
        name: 'md-inset',
        description: _t('创建一个插入分隔符，通常用于分隔相关内容。')
      }
    ]
  }
});
