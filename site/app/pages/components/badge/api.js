export default {
  classes: {
    headings: ['Name', 'Description'],
    props: [
      {
        name: 'md-square',
        description: 'Created square type badge.'
      }
    ]
  },
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'content',
        type: 'String, Number',
        description: 'A content for badge',
        defaults: ' '
      },
      {
        name: 'position',
        type: 'String',
        description: 'Position of badge <code>top</code> or <code>bottom</code>',
        defaults: 'top'
      },
      {
        name: 'dense',
        type: 'Boolean',
        description: 'Enables the dense layout',
        defaults: 'false'
      }
    ]
  }
};
