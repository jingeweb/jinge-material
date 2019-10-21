export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [{
      name: 'totalSize',
      type: 'Number|String',
      description: 'Set total data count. Used to calculate total page count.',
      defaults: '0'
    }, {
      name: 'pageSize',
      type: 'Number/String',
      description: 'Set data count of each page. Used to calculate total page count.',
      defaults: '10'
    }, {
      name: 'pageSizeOptions',
      type: 'Array<Number>|Boolean',
      description: 'Enable each page size select, use default options or specified options.',
      defaults: 'false'
    }, {
      name: 'currentPage',
      type: 'Number/String',
      description: 'Set current page index. Must be greater or equal than 1.',
      defaults: '1'
    }, {
      name: 'itemCount',
      type: 'Number/String',
      description: 'Set max pagination navigation item count.',
      defaults: '7'
    }, {
      name: 'useJumper',
      type: 'Boolean',
      description: 'Enable quick page index jumper.',
      defaults: 'false'
    }, {
      name: 'showTotal',
      type: 'Boolean',
      description: 'Show total data size tip.',
      defaults: 'false'
    }, {
      name: 'disabled',
      type: 'Boolean',
      description: 'Disable whole pagination.',
      defaults: 'false'
    }, {
      name: 'loadingPage',
      type: 'Number/String',
      description: 'Disable whole pagination and show loading spinner when loadingPage is greater than 0.',
      defaults: '0'
    }, {
      name: 'hideOnSinglePage',
      type: 'Boolean',
      description: 'Hide whole pagination when total page is less or equal than 1.',
      defaults: 'false'
    }]
  },
  events: {
    headings: ['Name', 'Description', 'Value'],
    props: [
      {
        name: 'change',
        description: 'Triggered when pagination is changed.',
        value: '(currentPage, pageSize)'
      }
    ]
  }
};
