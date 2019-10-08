export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'value',
        type: 'Date|Number|String',
        description: 'The value to bind the selected date',
        defaults: 'null'
      },
      {
        name: 'disabledDates',
        type: 'Function',
        description: 'The optional disabled dates. Must be Function which accepts 4 arguments (year, month, date, weekday).',
        defaults: 'null'
      },
      {
        name: 'openOnFocus',
        type: 'Boolean',
        description: 'Disable the on focus event. Will open only if the user clicks on the icon.',
        defaults: 'true'
      },
      {
        name: 'immediately',
        type: 'Boolean',
        description: 'Select the date without confirm and close the dialog immediately.',
        defaults: 'false'
      },
      {
        name: 'overrideNative',
        type: 'Boolean',
        description: 'Override native browser pickers by changing type of input to text.',
        defaults: 'true'
      },
      {
        name: 'inputDebounce',
        type: 'Number',
        description: 'Debounces the conversion of plaintext into a date object. Set to a longer time if your users type slowly, or shorter if your users type really fast.',
        defaults: 1000
      }
    ]
  },
  events: {
    headings: ['Name', 'Description', 'Value'],
    props: [
      {
        name: 'change',
        description: 'Triggered when datepicker day is selected/clicked',
        value: 'value of Date'
      },
      {
        name: 'confirm',
        description: 'Triggered when Confirm button is clicked',
        value: 'value of selected Date'
      },
      {
        name: 'opened',
        description: 'Triggered when a datepicker dialog opens',
        value: 'null'
      },
      {
        name: 'closed',
        description: 'Triggered when a datepicker dialog closes',
        value: 'null'
      }
    ]
  }
};
