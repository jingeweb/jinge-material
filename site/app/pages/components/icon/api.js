export default {
  common: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'size',
        type: 'Number|String',
        description: '图标大小，可以指定为数字，也可以指定为 css 字符串值。默认大小为当前字号。',
        defaults: '1em'
      }
    ]
  },
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'src',
        type: 'String',
        description: '指定需要下载并渲染的远程 svg 资源路径。',
        defaults: 'null'
      },
      {
        name: 'cache',
        type: 'Boolean',
        description: '当使用 src 指定远程资源时，可以通过 cache 参数指定是否缓存该资源。',
        defaults: 'true'
      }
    ]
  },
  events: {
    headings: ['Name', 'Description', 'Value'],
    props: [
      {
        name: 'loaded',
        description: '当 src 属性指定的远程 svg 资源被加载结束时触发',
        example: 'null/Error'
      }
    ]
  }
};
