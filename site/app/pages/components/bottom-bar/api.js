export default {
  bar: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'type',
          type: 'String',
          description: 'Sets the display mode. See below the detailed description of each type.',
          defaults: 'fixed'
        },
        {
          offset: true,
          name: 'type="fixed"',
          type: 'String',
          description: 'Makes the bar with fixed items. Good for a small amount of items.',
          defaults: '-'
        },
        {
          offset: true,
          name: 'type="shift"',
          type: 'String',
          description: 'Highlights the selected item and hide the label from the others. Good for a large amount of items. Up to 6.',
          defaults: '-'
        },
        {
          name: 'activeItem',
          type: 'String/Number',
          description: 'Dynamically changes the selected item. Works passing the ID of a bottom bar item.',
          defaults: 'null'
        }
      ]
    }
  },
  item: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'id',
          type: 'String',
          description: 'The item id. Used when changing the selected item dynamically',
          defaults: 'a random string'
        },
        {
          name: 'disabled',
          type: 'Boolean',
          description: 'Disable the bottom bar preventing the click on it and all actions.',
          defaults: 'false'
        }
      ]
    }
  }
};
