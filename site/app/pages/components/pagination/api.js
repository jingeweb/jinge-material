import {
  vm,
  _t
} from 'jinge';

export default () => vm({
  full: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [{
        name: 'totalSize',
        type: 'Number|String',
        description: _t('数据总量。'),
        defaults: '0'
      }, {
        name: 'pageSize',
        type: 'Number/String',
        description: _t('每页的数据量。'),
        defaults: '10'
      }, {
        name: 'pageSizeOptions',
        type: 'Array<Number>|Boolean',
        description: _t('是否启用每页数量选择器。指定为具体的数组，则使用自定义的选项；指定为 true 使用默认的选项。'),
        defaults: 'false'
      }, {
        name: 'currentPage',
        type: 'Number/String',
        description: _t('设置当前页号。页码从 1 开始计数。'),
        defaults: '1'
      }, {
        name: 'itemCount',
        type: 'Number/String',
        description: _t('设置最大页码导航按钮数量。'),
        defaults: '7'
      }, {
        name: 'useJumper',
        type: 'Boolean',
        description: _t('启用页码快速跳转功能'),
        defaults: 'false'
      }, {
        name: 'showTotal',
        type: 'Boolean',
        description: _t('展示数据总量的提示信息。'),
        defaults: 'false'
      }, {
        name: 'disabled',
        type: 'Boolean',
        description: _t('禁用整个分页组件。'),
        defaults: 'false'
      }, {
        name: 'loadingPage',
        type: 'Number/String',
        description: _t('指定正在加载的页码。如果该属性值大于 0，则会禁用整个分页组件，并在正在加载的页码按钮上展示 md-pinner。'),
        defaults: '0'
      }, {
        name: 'hideOnSinglePage',
        type: 'Boolean',
        description: _t('当计算出来的总页码数量小于等于 1 时，隐藏分页组件。'),
        defaults: 'false'
      }]
    },
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'change',
          description: _t('当分页参数（包括当前页码和每页数据量）发生变化时触发。'),
          value: '(currentPage, pageSize)'
        }
      ]
    }
  },
  light: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [{
        name: 'cursors',
        type: 'Array<string|number|null>',
        description: _t('游标数组，如果最后一个元素为 null，则说明已经到最后一页。'),
        defaults: 'an empty array'
      }, {
        name: 'pageSize',
        type: 'Number/String',
        description: _t('每页的数据量。'),
        defaults: '10'
      }, {
        name: 'pageSizeOptions',
        type: 'Array<Number>|Boolean',
        description: _t('是否启用每页数量选择器。指定为具体的数组，则使用自定义的选项；指定为 true 使用默认的选项。'),
        defaults: 'false'
      }, {
        name: 'disabled',
        type: 'Boolean',
        description: _t('禁用整个分页组件。'),
        defaults: 'false'
      }, {
        name: 'hideSinglePage',
        type: 'Boolean',
        description: _t('当总页码数量等于 1 时（游标数组仅有一个 null 元素），隐藏分页组件。'),
        defaults: 'false'
      }]
    },
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'change',
          description: _t('当分页参数（包括当前游标和每页数据量）发生变化时触发。'),
          value: '(cursor, pageSize)'
        }
      ]
    }
  }
});
