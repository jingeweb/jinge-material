export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'value',
        type: 'Number',
        description: '指示进度的值。当不指定该参数时，spinner 表现为旋转加载状态；当指定该参数时，spinner 表现为进度条。',
        defaults: 'undefined'
      },
      {
        name: 'size',
        type: 'Number|String',
        description: '图标大小，可以指定为数字，也可以指定为 css 字符串值，还可以指定为 "small"/"normal"/"large" 三者之一（依次对应 36px, 48px, 64px）',
        defaults: '1em'
      },
      {
        name: 'class',
        type: 'String',
        description: '传递给 DOM 的 class。',
        defaults: 'an empty string'
      },
      {
        name: 'style',
        type: 'string',
        description: '传递给 DOM 的 style。',
        defaults: 'an empty string'
      }
    ]
  },
  classes: {
    headings: ['Name', 'Description'],
    props: [
      {
        name: 'md-primary',
        description: '指定使用 primary 颜色。'
      },
      {
        name: 'md-accent',
        description: '指定使用 accent 颜色。'
      },
      {
        name: 'md-ajust-baseline',
        description: '当需要将 Spinner 和文本混合排版时，如果父元素没有使用 flex 布局，则需要使用 md-ajust-baseline 来调整 Baseline。'
      }
    ]
  }
};
