import {
  interactionEvents
} from '../../../../../src/_util';

export default {
  interactionEvents: interactionEvents,
  list: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'md-expand-single',
          type: 'Boolean',
          description: 'If set true, one expandable list item could be expanded at most at a time. The expanded list item will be collapsed when another is expanded',
          defaults: 'false'
        }
      ]
    },
    classes: {
      headings: ['Name', 'Description'],
      props: [
        {
          name: 'md-dense',
          description: 'Enables the dense layout'
        },
        {
          name: 'md-double-line',
          description: 'The double line lists are good to show additional information about single items'
        },
        {
          name: 'md-triple-line',
          description: 'The three line lists are great for showing a preview of the full content of the item'
        }
      ]
    }
  },
  item: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'md-expand',
          type: 'Boolean',
          description: 'Enables the expansion panel',
          defaults: 'false'
        },
        {
          name: 'md-expanded',
          type: 'Boolean',
          description: 'The prop to show/hide the expansion panel. Should be used with the <code>.sync</code> modifier',
          defaults: 'false'
        }
      ]
    }
  }
};
