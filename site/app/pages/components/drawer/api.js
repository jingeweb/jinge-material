export default {
  container: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'pushMode',
          type: 'Boolean',
          description: 'todo',
          defaults: 'false'
        }
      ]
    }
  },
  drawer: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'active',
          type: 'Boolean',
          description: 'Option used to trigger the drawer visibility. Should be used with the <code>.sync</code> modifier.',
          defaults: 'false'
        },
        {
          name: 'fixed',
          type: 'Boolean',
          description: 'Applies <code>position: fixed</code> to drawer. Useful to be used as the main drawer of the application (like on this documentation).',
          defaults: 'false'
        },
        {
          name: 'right',
          type: 'Boolean',
          description: 'This is used to place the drawer on the right of the screen.',
          defaults: 'false'
        }
      ]
    },
    events: {
      headings: ['Name', 'Description', 'Value'],
      props: [
        {
          name: 'opened',
          description: 'Triggered when a drawer opens',
          value: 'null'
        },
        {
          name: 'closed',
          description: 'Triggered when a drawer closes',
          value: 'null'
        }
      ]
    }
  }
};
