export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'tag',
        type: 'String',
        description: 'The output tag. Useful when you want to create a section instead of div, for example.',
        defaults: 'div'
      }
    ]
  }
};
