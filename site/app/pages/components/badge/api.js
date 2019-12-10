import {
  _t,
  VM
} from 'jinge';

export default () => VM({
  classes: {
    headings: [_t('名称'), _t('描述')],
    props: [
      {
        name: 'md-square',
        description: _t('创建静态的方形徽标')
      }
    ]
  },
  props: {
    headings: [_t('名称'), _t('描述'), _t('默认值')],
    props: [
      {
        name: 'content',
        type: 'String, Number',
        description: _t('指定徽章内容'),
        defaults: ' '
      },
      {
        name: 'position',
        type: 'String',
        description: _t('指定徽章位置，<code>top</code> 或 <code>bottom</code>'),
        defaults: 'top'
      },
      {
        name: 'dense',
        type: 'Boolean',
        description: _t('使用紧凑型徽章'),
        defaults: 'false'
      }
    ]
  }
});
