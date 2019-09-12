export default {
  steppers: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'activeStep',
          type: 'String/Number',
          description: 'The id of the step to be set as the current one. Useful to programatically change the active step.',
          defaults: '0'
        },
        {
          name: 'alternative',
          type: 'Boolean',
          description: 'Change the steppers into a alternative layout',
          defaults: 'false'
        },
        {
          name: 'vertical',
          type: 'Boolean',
          description: 'Change the steppers into a vertical orientation. For mobile.',
          defaults: 'false'
        },
        {
          name: 'linear',
          type: 'Boolean',
          description: 'Set steppers to work in a linear flow.',
          defaults: 'false'
        },
        {
          name: 'dynamicHeight',
          type: 'Boolean',
          description: 'Calculate the stepper height automatically and add an awesome height transition between them.',
          defaults: 'false'
        }
      ]
    },
    events: {
      headings: ['Name', 'Description', 'Value'],
      props: [
        {
          name: 'changed',
          description: 'Triggered when the active stepper changes',
          value: '(index, step)'
        }
      ]
    }
  },
  step: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'id',
          type: 'String',
          description: 'The step id. Used when changing the active step dynamically',
          defaults: 'a random string'
        },
        {
          name: 'label',
          type: 'String',
          description: 'The step label',
          defaults: 'null'
        },
        {
          name: 'description',
          type: 'String',
          description: 'The step description. When a step is optional, use this prop to tell the user that.',
          defaults: 'null'
        },
        {
          name: 'error',
          type: 'String',
          description: 'The error message. When set, the stepper will automatically raise an error. To clear the error, set this variable as null.',
          defaults: 'null'
        },
        {
          name: 'done',
          type: 'Boolean',
          description: 'Set this prop to true to tell that a particular step is finished.',
          defaults: 'false'
        },
        {
          name: 'editable',
          type: 'Boolean',
          description: 'Make a step editable or non editable.',
          defaults: 'true'
        }
      ]
    }
  }
};
