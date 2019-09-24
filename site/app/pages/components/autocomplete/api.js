export default {
  slots: {
    headings: ['Name', 'Description', 'Values'],
    props: [
      {
        name: 'item',
        description: 'Creates a custom autocomplete result item',
        options: [
          {
            name: 'option',
            description: 'Will receive each option of the matched options.'
          },
          {
            name: 'term',
            description: 'The current input search term.'
          }
        ],
        usage: '<_slot slot-pass:"item" vm-use:option="option" vm:term > ... </_slot>'
      },
      {
        name: 'empty',
        description: 'Creates a empty state in case of zero matches',
        options: [
          {
            name: 'term',
            description: 'The current input search term.'
          }
        ],
        usage: '<_slot slot-pass:empty vm-use:term="term"> ... </_slot>'
      }
    ]
  },
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'value',
        type: 'String',
        description: 'The model variable to bind the autocomplete value',
        defaults: 'null'
      },
      {
        name: 'options',
        type: 'Array|Promise',
        description: 'The available options to be searched. If <code>Array</code>, the autocomplete will use a inner search engine. If <code>Promise</code>, you will need to implement the search by yourself (this is commonly made by a backend service).',
        defaults: '[]'
      },
      {
        name: 'name',
        type: 'String',
        description: 'The input name attribute',
        defaults: 'null'
      },
      {
        name: 'id',
        type: 'String',
        description: 'The input id attribute',
        defaults: 'a random string'
      },
      {
        name: 'maxlength',
        type: 'Number',
        description: 'Enables a character count, based on the given value.',
        defaults: 'null'
      },
      {
        name: 'placeholder',
        type: 'Number',
        description: 'Sets a optional placeholder on autocomplete.',
        defaults: 'null'
      },
      {
        name: 'dense',
        type: 'Boolean',
        description: 'Enable the dense layout for options',
        defaults: 'false'
      },
      {
        name: 'layout',
        type: 'String',
        description: 'Sets the input layout. The floating variant is the default. See below the detailed description of each layout.',
        defaults: 'floating'
      },
      {
        offset: true,
        name: 'layout="floating"',
        type: 'String',
        description: 'Sets the input layout to floating. This is the default.',
        defaults: '-'
      },
      {
        offset: true,
        name: 'layout="box"',
        type: 'String',
        description: 'Sets the input layout to a boxed layout.',
        defaults: '-'
      },
      {
        name: 'openOnFocus',
        type: 'Boolean',
        description: 'Disable/enable the on focus event. If <code>false</code>, the options will show the results right after a keystroke.',
        defaults: 'true'
      },
      {
        name: 'searchProp',
        type: 'String',
        description: 'if option is object, you need specify which property will be used for search filter.',
        defaults: 'null'
      },
      {
        name: 'searchMethod',
        type: 'String',
        description: 'search algorithm for option filter. This option do not take any effects if the <code>md-options</code> is a Promise. see api of <code>md-highlight</code> for more details.',
        defaults: 'fuzzy'
      }
    ]
  },
  events: {
    headings: ['Name', 'Description', 'Value'],
    props: [
      {
        name: 'change',
        description: 'Triggered when the user types on the input field',
        value: 'The term string'
      },
      {
        name: 'selected',
        description: 'Triggered when the user selects an option',
        value: 'The selected option'
      },
      {
        name: 'opened',
        description: 'Triggered when the options panel is opened',
        value: 'null'
      },
      {
        name: 'closed',
        description: 'Triggered when the options panel is closed',
        value: 'null'
      }
    ]
  }
};
