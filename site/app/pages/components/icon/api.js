import {
  VM,
  _t
} from 'jinge';

export default () => VM({
  common: {
    headings: [_t('名称'), _t('描述'), _t('默认值')],
    props: [
      {
        name: 'size',
        type: 'Number|String',
        description: _t('图标大小，可以指定为数字，也可以指定为 css 字符串值。默认大小为当前字号。'),
        defaults: '1em'
      }
    ]
  },
  props: {
    headings: [_t('名称'), _t('描述'), _t('默认值')],
    props: [
      {
        name: 'src',
        type: 'String',
        description: _t('指定需要下载并渲染的远程 svg 资源路径。'),
        defaults: 'null'
      },
      {
        name: 'cache',
        type: 'Boolean',
        description: _t('当使用 src 指定远程资源时，可以通过 cache 参数指定是否缓存该资源。'),
        defaults: 'true'
      }
    ]
  },
  events: {
    headings: [_t('名称'), _t('描述'), _t('参数')],
    props: [
      {
        name: 'loaded',
        description: _t('当 src 属性指定的远程 svg 资源被加载结束时触发。如果加载出错，则会将错误信息做为参数传递。'),
        value: 'null/Error'
      }
    ]
  }
});
