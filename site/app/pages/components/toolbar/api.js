export default {
  regular: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'md-elevation',
          type: 'String|Number',
          description: 'Sets the toolbar shadow elevation',
          defaults: '4'
        }
      ]
    },
    classes: {
      headings: ['Name', 'Description'],
      props: [
        {
          name: 'md-transparent',
          description: 'Makes the Toolbar background transparent'
        },
        {
          name: 'md-dense',
          description: 'Creates a small sized toolbar'
        },
        {
          name: 'md-medium',
          description: 'Creates a medium sized toolbar'
        },
        {
          name: 'md-large',
          description: 'Creates a large sized toolbar'
        }
      ]
    }
  },
  elements: {
    classes: {
      headings: ['Name', 'Description'],
      props: [
        {
          name: 'md-toolbar-row',
          description: 'Creates a toolbar row, commonly used on large toolbars'
        },
        {
          name: 'md-toolbar-offset',
          description: 'Adds an left offset to any toolbar row. Only works in md-toolbar-row'
        },
        {
          name: 'md-toolbar-section-start',
          description: 'Creates a section on the left of a toolbar or toolbar row. Commonly used to hold the application menu button and the title'
        },
        {
          name: 'md-toolbar-section-end',
          description: 'Creates a section on the right of a toolbar or toolbar row. Commonly used to hold the main action of a toolbar, such as overflow buttons'
        },
        {
          name: 'md-title',
          description: 'Will create the toolbar title. Works inside or outside a toolbar row'
        }
      ]
    }
  }
};
