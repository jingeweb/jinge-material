export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'label',
        type: 'String',
        description: 'The label of the empty state. Works as a title. Optional.',
        defaults: 'null'
      },
      {
        name: 'description',
        type: 'String',
        description: 'The description of the empty state. Optional.',
        defaults: 'null'
      },
      {
        name: 'rounded',
        type: 'Boolean',
        description: 'Make the empty state rounded, with a nice background color.',
        defaults: 'false'
      },
      {
        name: 'size',
        type: 'Number|String',
        description: 'The rounded width/height size. Only works with <code>rounded</code>.',
        defaults: '420'
      }
    ]
  }
};
