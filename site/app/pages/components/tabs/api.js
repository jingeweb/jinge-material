export default {
  tabs: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'activeTab',
          type: 'String|Number',
          description: 'Set the current selected tab. Works by providing the id of the desired <code>md-tab</code>.',
          defaults: 'null'
        },
        {
          name: 'alignment',
          type: 'String',
          description: 'Sets the tab navigation alignment. See below the detailed description of each layout.',
          defaults: 'left'
        },
        {
          offset: true,
          name: 'alignment="left"',
          type: 'String',
          description: 'Align the tabs navigation buttons to left',
          defaults: '-'
        },
        {
          offset: true,
          name: 'alignment="center"',
          type: 'String',
          description: 'Align the tabs navigation buttons on center',
          defaults: '-'
        },
        {
          offset: true,
          name: 'alignment="right"',
          type: 'String',
          description: 'Align the tabs navigation buttons on right',
          defaults: '-'
        },
        {
          offset: true,
          name: 'alignment="fixed"',
          type: 'String',
          description: 'Make the navigation buttons to fill all the available space.',
          defaults: '-'
        },
        {
          name: 'dynamicHeight',
          type: 'Boolean',
          description: 'Apply a dynamic transition to the table height. Be careful with this option to not hurt the performance of your page.',
          defaults: 'false'
        },
        {
          name: 'elevation',
          type: 'Number',
          description: 'Add an elevation to tab navigation element.',
          defaults: '0'
        }
      ]
    },
    events: {
      headings: ['Name', 'Description', 'Value'],
      props: [
        {
          name: 'changed',
          description: 'Triggered when the active tab changes',
          value: '(index, tab)'
        }
      ]
    }
  },
  tab: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'id',
        type: 'String',
        description: 'The tab id. Used when changing the active tab dynamically',
        defaults: 'a random string'
      },
      {
        name: 'href',
        type: 'String',
        description: 'The tab href link. Useful when you don\'t have Jinge UI Router on your app, but you still want to change the current URL based on the tab.',
        defaults: 'null'
      },
      {
        name: 'label',
        type: 'String',
        description: 'The tab label',
        defaults: 'null'
      },
      {
        name: 'disabled',
        type: 'Boolean',
        description: 'Disable/enable a tab',
        defaults: 'null'
      },
      {
        name: 'to',
        type: 'String',
        description: 'ui router state',
        defaults: 'null'
      },
      {
        name: 'data',
        type: 'Object',
        description: 'The external data to be passed to the respective tab button.',
        defaults: 'null'
      }
    ]
  }
};
