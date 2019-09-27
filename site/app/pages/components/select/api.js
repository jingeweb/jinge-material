export default {
  select: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'value',
          type: 'String|Number|Boolean|Array',
          description: 'The value variable to bind the select value',
          defaults: 'null'
        },
        {
          name: 'placeholder',
          type: 'String',
          description: 'The select placeholder. Similar to HTML5 placeholder attribute.',
          defaults: 'null'
        },
        {
          name: 'required',
          type: 'String',
          description: 'The select required. Similar to HTML5 required attribute.',
          defaults: 'null'
        },
        {
          name: 'id',
          type: 'String',
          description: 'The select id. Similar to HTML5 id attribute.',
          defaults: 'null'
        },
        {
          name: 'name',
          type: 'String',
          description: 'The select name. Similar to HTML5 name attribute.',
          defaults: 'null'
        },
        {
          name: 'disabled',
          type: 'Boolean',
          description: 'Disable the select and prevent it selection.',
          defaults: 'false'
        },
        {
          name: 'multiple',
          type: 'Boolean',
          description: 'Create a multi selection with checkboxes inside. Only works with a <code>v-model</code> with an <code>Array</code>',
          defaults: 'false'
        },
        {
          name: 'md-dense',
          type: 'Boolean',
          description: 'Enable the dense layout',
          defaults: 'false'
        }
      ]
    },
    events: {
      headings: ['Name', 'Description', 'Value'],
      props: [
        {
          name: 'change',
          description: 'Triggered when value is changed.',
          value: 'value'
        },
        {
          name: 'opened',
          description: 'Triggered when select is opened.',
          value: ' '
        },
        {
          name: 'closed',
          description: 'Triggered when select is closed.',
          value: ' '
        }
      ]
    }
  },
  option: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'value',
        type: 'String|Number|Boolean',
        description: 'The option value. This is used to bind to <code>md-select</code> model',
        defaults: 'null'
      },
      {
        name: 'disabled',
        type: 'Boolean',
        description: 'Disable the option and prevent it selection.',
        defaults: 'false'
      }
    ]
  },
  optgroup: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'label',
        type: 'String',
        description: 'The group label',
        defaults: 'null'
      },
      {
        name: 'disabled',
        type: 'Boolean',
        description: 'Disable the optgroup and prevent the selection of all options inside.',
        defaults: 'false'
      }
    ]
  }
};
