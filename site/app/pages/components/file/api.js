import {
  _t,
  vm
} from 'jinge';

export default () => vm({
  regular: {
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'change',
          description: _t('每次选择文件时触发，传递 FileList 参数。'),
          value: 'name, FileList|File'
        }
      ]
    }
  }
});
