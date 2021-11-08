import { _t, vm } from 'jinge';

export default () =>
  vm({
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'tag',
          type: 'String',
          description: _t('渲染的 HTML 标签，用于创建不是默认的 div 标签。'),
          defaults: 'div',
        },
      ],
    },
  });
