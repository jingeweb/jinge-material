import {
  VM,
  _t
} from 'jinge';

export default () => VM({
  field: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'inline',
          type: 'Boolean',
          description: 'Make the label inline. This means that the label will disappear when the input receives a focus.',
          defaults: 'false'
        },
        {
          name: 'counter',
          type: 'Boolean',
          description: 'Enable the character counter. Only works with fields that have a <code>input</code> or <code>textarea</code> with a <code>maxlength</code> or <code>counter</code> attributes.',
          defaults: 'false'
        },
        {
          name: 'clearable',
          type: 'Boolean',
          description: 'Add a clear button on the right of the input.',
          defaults: 'false'
        },
        {
          name: 'togglePassword',
          type: 'Boolean',
          description: 'Add a toggle button on the right of the input to reveal/hide the password. Only works with fields that have a <code>input</code> with type password.',
          defaults: 'false'
        }
      ]
    },
    events: {
      headings: ['Name', 'Description', 'Value'],
      props: [
        {
          name: 'clear',
          description: 'Triggered after a mouse click on clear icon. Only fired when clearable is true.',
          value: '-'
        }
      ]
    }
  },
  input: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'value',
        type: 'String|Number|Boolean|Array',
        description: 'The model variable to bind the input value',
        defaults: 'null'
      },
      {
        name: 'type',
        type: 'String',
        description: 'The input type. Similar to HTML5 type attribute.',
        defaults: 'text'
      },
      {
        name: 'placeholder',
        type: 'String',
        description: 'The input placeholder. Similar to HTML5 placeholder attribute.',
        defaults: 'null'
      },
      {
        name: 'required',
        type: 'Boolean',
        description: 'The input required. Similar to HTML5 required attribute.',
        defaults: 'false'
      },
      {
        name: 'id',
        type: 'String',
        description: 'The input id. Similar to HTML5 id attribute.',
        defaults: 'a random string'
      },
      {
        name: 'name',
        type: 'String',
        description: 'The input name. Similar to HTML5 name attribute.',
        defaults: 'null'
      },
      {
        name: 'disabled',
        type: 'Boolean',
        description: 'Disable the input and prevent it interactions.',
        defaults: 'false'
      },
      {
        name: 'maxlength',
        type: 'Number',
        description: 'Enable the counter for the field and set a maxlength',
        defaults: 'null'
      },
      {
        name: 'counter',
        type: 'Number|Boolean',
        description: 'Enable the counter for the field. This is useful when you want only a counter without setting a maxlength. After setting a maxlength, in case if you do not want to display the counter, set this prop to false',
        defaults: 'true'
      }
    ],
    events: {
      headings: ['Name', 'Description', 'Value'],
      props: [
        {
          name: 'change',
          description: '文本发生变化时的事件，等价于原生 input 元素的 input 事件。',
          value: 'event'
        }
      ]
    }
  },
  textarea: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'value',
        type: 'String|Number|Boolean|Array',
        description: 'The model variable to bind the textarea value',
        defaults: 'null'
      },
      {
        name: 'placeholder',
        type: 'String',
        description: 'The textarea placeholder. Similar to HTML5 placeholder attribute.',
        defaults: 'null'
      },
      {
        name: 'required',
        type: 'Boolean',
        description: 'The input required. Similar to HTML5 required attribute.',
        defaults: 'false'
      },
      {
        name: 'id',
        type: 'String',
        description: 'The textarea id. Similar to HTML5 id attribute.',
        defaults: 'a random string'
      },
      {
        name: 'name',
        type: 'String',
        description: 'The textarea name. Similar to HTML5 name attribute.',
        defaults: 'null'
      },
      {
        name: 'disabled',
        type: 'Boolean',
        description: 'Disable the textarea and prevent it interactions.',
        defaults: 'false'
      },
      {
        name: 'maxlength',
        type: 'Number',
        description: 'Enable the counter for the field and set a maxlength',
        defaults: 'null'
      },
      {
        name: 'counter',
        type: 'Number',
        description: 'Enable the counter for the field. This is useful when you want only a counter without set a maxlength',
        defaults: 'null'
      },
      {
        name: 'autogrow',
        type: 'Boolean',
        description: 'Enable the textarea autogrow',
        defaults: 'false'
      }
    ],
    events: {
      headings: ['Name', 'Description', 'Value'],
      props: [
        {
          name: 'change',
          description: '文本发生变化时的事件，等价于原生 textarea 元素的 input 事件。',
          value: 'event'
        }
      ]
    }
  }
});
