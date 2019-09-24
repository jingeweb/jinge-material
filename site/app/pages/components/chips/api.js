export default {
  chip: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'clickable',
          type: 'Boolean',
          description: 'Enables/Disables the click action in the chip.',
          defaults: 'false'
        },
        {
          name: 'deletable',
          type: 'Boolean',
          description: 'Creates a chip that can hold a delete action. Useful when editing a chip series, like tags or categories.',
          defaults: 'false'
        },
        {
          name: 'disabled',
          type: 'Boolean',
          description: 'Enables/Disables the chip to be clickable of deletable.',
          defaults: 'false'
        }
      ]
    },
    events: {
      headings: ['Name', 'Description', 'Value'],
      props: [
        {
          name: 'delete',
          description: 'Triggered after a mouse click on delete icon. Only fired when deletable is true.',
          value: '$event'
        }
      ]
    }
  },
  chips: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'value',
          type: 'Array',
          description: 'The content to be displayed as chips. Need to be a array of strings, unless you specify a custom template.',
          defaults: '[]'
        },
        {
          name: 'id',
          type: 'String',
          description: 'The input id. If null, it will be created automatically.',
          defaults: 'null'
        },
        {
          name: 'inputType',
          type: 'String',
          description: 'The input type. Cannot be \'file\'',
          defaults: 'text'
        },
        {
          name: 'placeholder',
          type: 'String',
          description: 'The input placeholder. It is useful to show to the user which type of data will be inserted.',
          defaults: 'null'
        },
        {
          name: 'static',
          type: 'Boolean',
          description: 'Creates a non-editable chips. Useful to show inside a details page.',
          defaults: 'false'
        },
        {
          name: 'limit',
          type: 'Number',
          description: 'Blocks the chips to create items above the limit.',
          defaults: 'false'
        },
        {
          name: 'checkDuplicated',
          type: 'Boolean',
          description: 'Always check if there is a duplicated chip while changing the input value, or check it only on insertion',
          defaults: 'false'
        }
      ]
    },
    events: {
      headings: ['Name', 'Description', 'Value'],
      props: [
        {
          name: 'change',
          description: 'Triggered after chips changed.'
        },
        {
          name: 'delete',
          description: 'Triggered after a mouse click on delete icon of a chip.',
          value: '<span>Two params:</span> <br/> text, index'
        },
        {
          name: 'chipClicked',
          description: 'Triggered after a mouse click on a single chip.',
          value: '<span>Two params:</span> <br/> text, index'
        },
        {
          name: 'insert',
          description: 'Triggered after a chip inserted.',
          value: 'The last inserted chip value'
        }
      ]
    }
  }
};
