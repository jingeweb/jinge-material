import {
  _t,
  VM
} from 'jinge';

export default () => VM({
  breakpoints: {
    headings: [_t('名称'), _t('描述'), _t('宽度')],
    props: [
      {
        name: 'xsmall',
        description: _t('适用于最大 599px 宽的屏幕，比如大、中、小型人像手机以及纵向的小型平板电脑。'),
        value: '< 599px'
      },
      {
        name: 'small',
        description: _t('适用于宽度介于 600 像素到 959 像素之间的屏幕，比如中型和大型手机、纵向模式的小型和大型平板电脑以及某些台式机显示器。'),
        value: '959px'
      },
      {
        name: 'medium',
        description: _t('适用于 960 像素至 1279 像素之间的屏幕，比如横向和台式显示器中的小型和大型平板电脑。'),
        value: '1279px'
      },
      {
        name: 'large',
        description: _t('适用于 1280 像素至 1919 像素之间的屏幕，比如大型台式机显示器。'),
        value: '1919px'
      },
      {
        name: 'xlarge',
        description: _t('适用于宽于 1920 像素的屏幕，比如大型台式机显示器或并排屏幕。'),
        value: '> 1920px'
      }
    ]
  },
  gutter: {
    headings: [_t('屏幕大小'), _t('间隙')],
    props: [
      {
        name: 'xsmall',
        value: '8px'
      },
      {
        name: 'small',
        value: '16px'
      },
      {
        name: 'medium',
        value: '24px'
      },
      {
        name: 'large',
        value: '48px'
      }
    ]
  },
  layout: {
    headings: [_t('名称'), _t('描述')],
    props: [
      {
        name: 'md-gutter',
        description: _t('布局项目之间使用自动计算的间隙。')
      },
      {
        name: 'md-layout-nowrap',
        description: _t('默认情况下，布局项目将始终包装在父布局下。 如果要禁用此行为，请使用此类，但是响应性将不起作用。')
      },
      {
        name: 'md-alignment-<code>[x]</code>-<code>[y]</code>',
        description: _t('设置所有子项的对齐方式，仅当 [x] 和 [y] 同时存在时，对齐方式才有效，例如 <code>md-alignment-top-center</code>。 可能的值包括：') + `<br>
<ul>
  <li>top</li>
  <li>center</li>
  <li>left</li>
  <li>space-around</li>
  <li>space-between</li>
</ul>`
      }
    ]
  },
  item: {
    headings: [_t('名称'), _t('描述')],
    props: [
      {
        name: 'md-size-<code>[amount]</code>',
        description: _t('设置元素的布局大小，按百分比计算，[amount] 可以是 33、66 或 5 的倍数，例如 <code>md-size-25</code>。')
      },
      {
        name: 'md-<code>[breakpoint]</code>-size-<code>[amount]</code>',
        description: _t('设置元素在特定断点下的布局大小，可能的值包括：') + `<br/>
<ul>
  <li>xsmall</li>
  <li>small</li>
  <li>medium</li>
  <li>large</li>
  <li>xlarge</li>
</ul>`
      }
    ]
  },
  hide: {
    headings: [_t('名称'), _t('描述')],
    props: [
      {
        name: 'md-<code>[breakpoint]</code>-hide',
        description: _t('设置元素在特定断点下隐藏，可能的值包括：') + `<br/>
<ul>
  <li>xsmall</li>
  <li>small</li>
  <li>medium</li>
  <li>large</li>
  <li>xlarge</li>
</ul>`
      }
    ]
  }
});
