export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'value',
        type: 'Any',
        description: 'The value of the checkbox',
        defaults: 'false'
      },
      {
        name: 'trueValue',
        type: 'Any',
        description: 'The value when checked',
        defaults: 'true'
      },
      {
        name: 'falseValue',
        type: 'Any',
        description: 'The value when unchecked',
        defaults: 'false'
      },
      {
        name: 'id',
        type: 'String',
        description: 'The checkbox unique id.',
        defaults: 'a random string'
      }
    ]
  },
  events: {
    headings: ['Name', 'Description', 'Value'],
    props: [
      {
        name: 'change',
        description: 'Triggered after a value is selected',
        value: 'value'
      }
    ]
  }
};