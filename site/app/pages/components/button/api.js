import {
  _t
} from 'jinge';

export default {
  regular: {
    props: {
      headings: [_t('属性名称'), _t('描述'), _t('默认值')],
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
          description: 'Creates raised buttons with elevation'
        },
        {
          name: 'md-dense',
          description:
            'A slight small variant of buttons. Useful to create a compact UI.'
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
          description: 'Enables the rounded-shape icon button'
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
          description: 'Turns a button into a FAB'
        },
        {
          name: 'md-plain',
          description: 'Makes the button white'
        },
        {
          name: 'md-mini',
          description: 'Creates a smaller FAB'
        },
        {
          name: 'md-dense',
          description: 'An alias for "md-mini"'
        },
        {
          name: 'md-fab-top-right',
          description:
            'Positions the FAB on the top right of the nearest relative parent'
        },
        {
          name: 'md-fab-top-center',
          description:
            'Positions the FAB on the top center of the nearest relative parent'
        },
        {
          name: 'md-fab-top-left',
          description:
            'Positions the FAB on the top left of the nearest relative parent'
        },
        {
          name: 'md-fab-bottom-right',
          description:
            'Positions the FAB on the bottom right of the nearest relative parent'
        },
        {
          name: 'md-fab-bottom-center',
          description:
            'Positions the FAB on the bottom center of the nearest relative parent'
        },
        {
          name: 'md-fab-bottom-left',
          description:
            'Positions the FAB on the bottom left of the nearest relative parent'
        },
        {
          name: 'md-fixed',
          description:
            'Apply position: fixed to FAB. Better used with the 4 position coordinates above'
        }
      ]
    }
  }
};
