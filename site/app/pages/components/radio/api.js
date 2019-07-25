export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'value',
        type: 'Any',
        description: '点击选中时通过 change 事件向外传递的值',
        defaults: 'undefined'
      },
      {
        name: 'checked',
        type: 'Boolean',
        description: '是否为选中状态',
        defaults: 'false'
      },
      {
        name: 'id',
        type: 'String',
        description: 'The radio unique id.',
        defaults: 'a random string'
      },
      {
        name: 'name',
        type: 'String',
        description: '用于标识分组的 name，会传递给原生 input，实现多个 radio 关联',
        defaults: 'a empty string'
      }
    ]
  },
  events: {
    headings: ['Name', 'Description', 'Value'],
    props: [
      {
        name: 'change',
        description: 'Triggered after a value is selected',
        value: 'value'
      }
    ]
  }
};
