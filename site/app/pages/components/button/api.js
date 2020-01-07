import {
  _t,
  vm
} from 'jinge';

export default () => vm({
  regular: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'type',
          type: 'String',
          description: _t('直接传递到原生 &lt;button&gt; 元素的 type 属性'),
          defaults: 'button'
        },
        {
          name: 'e:disabled',
          type: 'Boolean',
          description: _t('禁用按钮。'),
          defaults: 'false'
        },
        {
          name: 'e:ripple',
          type: 'Boolean',
          description: _t('是否启用 ripple 效果。'),
          defaults: 'true'
        }
      ]
    },
    events: {
      headings: [_t('事件名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'click',
          description: _t('鼠标点击事件。'),
          value: '$event'
        },
        {
          name: '&lt;any&gt;',
          description: _t('任意可作用到原生 &lt;button&gt; 元素的事件，组件会将事件绑定传递到原生 &lt;button&gt; 元素。'),
          value: '$event'
        }
      ]
    },
    classes: {
      headings: [_t('名称'), _t('描述')],
      props: [
        {
          name: 'md-primary',
          description: _t('主题 Primary 颜色按钮。')
        },
        {
          name: 'md-accent',
          description: _t('主题 Accent 颜色按钮。')
        },
        {
          name: 'md-raised',
          description: _t('创建带有阴影的凸起按钮')
        },
        {
          name: 'md-dense',
          description: _t('使用紧凑型的按钮样式。')
        }
      ]
    }
  },
  icons: {
    classes: {
      headings: [_t('名称'), _t('描述')],
      props: [
        {
          name: 'md-icon-button',
          description: _t('使用圆形的图标按钮。')
        }
      ]
    }
  },
  fab: {
    classes: {
      headings: [_t('名称'), _t('描述')],
      props: [
        {
          name: 'md-fab',
          description: _t('使用 FAB 按钮')
        },
        {
          name: 'md-dense',
          description: _t('使用紧凑型的按钮样式。')
        },
        {
          name: 'md-fab-[position]',
          description: _t('指定 FAB 按钮的位置。位置 [position] 可选值包括：') + `<br/>
<ul>
  <li>top-right</li>
  <li>top-center</li>
  <li>top-left</li>
  <li>bottom-right</li>
  <li>bottom-center</li>
  <li>bottom-left</li>
</ul>`
        },
        {
          name: 'md-fixed',
          description: _t('使用 fixed 模式展示按钮。推荐和上述的 6 种位置配合使用。')
        }
      ]
    }
  }
});
