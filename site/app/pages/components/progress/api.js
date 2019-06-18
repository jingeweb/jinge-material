export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'mode',
        type: 'String',
        description: 'Set the mode the progress. See below the detailed description of each mode.',
        defaults: 'determinate'
      },
      {
        offset: true,
        name: 'mode="determinate"',
        type: 'String',
        description: 'The default mode. Works along with <code>md-value</code> prop. Apply a 0% to 100% loading bar.',
        defaults: '-'
      },
      {
        offset: true,
        name: 'mode="indeterminate"',
        type: 'String',
        description: 'Create a indeterminate loading bar',
        defaults: '-'
      },
      {
        offset: true,
        name: 'mode="query"',
        type: 'String',
        description: 'Create a loading bar for queries. Useful when retrieving a lot of contents.',
        defaults: '-'
      },
      {
        offset: true,
        name: 'mode="buffer"',
        type: 'String',
        description: 'Create a loading bar with a buffer. Commonly used in videos.',
        defaults: '-'
      },
      {
        name: 'value',
        type: 'Number',
        description: 'The current progress amount. From 0 to 100.',
        defaults: 'null'
      },
      {
        name: 'buffer',
        type: 'Number',
        description: 'The current buffer amount. From 0 to 100.',
        defaults: 'null'
      }
    ]
  }
};
