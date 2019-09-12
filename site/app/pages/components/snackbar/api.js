export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'active',
        type: 'Boolean',
        description: 'Option used to trigger the snackbar visibility. Should be used with the modifier.',
        defaults: 'false'
      },
      {
        name: 'duration',
        type: 'Number',
        description: 'Sets the duration in milliseconds before auto close the snackbar. 0 to disable auto close.',
        defaults: '4000'
      },
      {
        name: 'position',
        type: 'String',
        description: 'Sets the snackbar position on the bottom of the screen.',
        defaults: 'null'
      },
      {
        offset: true,
        name: 'position="center"',
        type: 'String',
        description: 'Make the snackbar centered.',
        defaults: '-'
      },
      {
        offset: true,
        name: 'position="left"',
        type: 'String',
        description: 'Make the snackbar left aligned.',
        defaults: '-'
      }
    ]
  },
  events: {
    headings: ['Name', 'Description', 'Value'],
    props: [
      {
        name: 'opened',
        description: 'Triggered when a snackbar opens',
        value: 'null'
      },
      {
        name: 'closed',
        description: 'Triggered when a snackbar closes',
        value: 'null'
      }
    ]
  }
};
