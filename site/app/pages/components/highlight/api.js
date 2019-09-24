export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'text',
        type: 'String',
        description: 'The text string to render',
        defaults: ''
      },
      {
        name: 'term',
        type: 'String',
        description: 'The search term to highlight',
        defaults: 'null'
      },
      {
        name: 'ignoreCase',
        type: 'Boolean',
        description: 'Ignore letter case when apply search',
        defaults: 'true'
      },
      {
        name: 'searchMethod',
        type: 'String',
        description: 'Algorithm used when apply search',
        defaults: 'fuzzy'
      }, {
        offset: true,
        name: 'searchMethod="fuzzy"',
        type: 'String',
        description: 'Use "fuzzysearch" algorithm to search term.',
        defaults: '-'
      }, {
        offset: true,
        name: 'searchMethod="starts"',
        type: 'String',
        description: 'Use string "startsWith" algorithm to search term.',
        defaults: '-'
      }, {
        offset: true,
        name: 'searchMethod="includes"',
        type: 'String',
        description: 'Use string "includes" algorithm to search term.',
        defaults: '-'
      }
    ]
  }
};
