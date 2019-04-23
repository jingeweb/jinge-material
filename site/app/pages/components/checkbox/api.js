export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'v-model',
        type: 'String|Number|Object|Boolean|Array',
        description: 'The model variable to bind the selection value. If it is an array, it will toggle values inside of it. If no value is assigned, then it will use the same behaviour of a regular input[type="checkbox"].',
        defaults: 'null'
      },
      {
        name: 'value',
        type: 'String|Number|Object|Boolean',
        description: 'The value of the checkbox',
        defaults: 'on'
      },
      {
        name: 'id',
        type: 'String',
        description: 'The checkbox unique id.',
        defaults: 'a random string'
      },
      {
        name: 'indeterminate',
        type: 'Boolean',
        description: 'Enables the indeterminate look of the checkbox.',
        defaults: 'false'
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