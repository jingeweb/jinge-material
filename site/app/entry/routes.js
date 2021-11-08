import { chunk } from 'jinge';

const componentsRoute = {
  name: 'components',
  path: '/components',
  redirect: 'components.button',
  children: [
    {
      name: 'components.button',
      path: '/button',
      onEnter: () => chunk.active('button'),
      onLeave: () => chunk.deactive('button'),
      component: async () => (await import(/* webpackChunkName: "button" */ '../pages/components/button')).PageButton,
    },
    {
      name: 'components.content',
      path: '/content',
      onEnter: () => chunk.active('content'),
      onLeave: () => chunk.deactive('content'),
      component: async () =>
        (await import(/* webpackChunkName: "content" */ '../pages/components/content')).PageContent,
    },
    {
      name: 'components.toolbar',
      path: '/toolbar',
      onEnter: () => chunk.active('toolbar'),
      onLeave: () => chunk.deactive('toolbar'),
      component: async () =>
        (await import(/* webpackChunkName: "toolbar" */ '../pages/components/toolbar')).PageToolbar,
    },
    {
      name: 'components.dialog',
      path: '/dialog',
      onEnter: () => chunk.active('dialog'),
      onLeave: () => chunk.deactive('dialog'),
      component: async () => (await import(/* webpackChunkName: "dialog" */ '../pages/components/dialog')).PageDialog,
    },
    {
      name: 'components.icon',
      path: '/icon',
      onEnter: () => chunk.active('icon'),
      onLeave: () => chunk.deactive('icon'),
      component: async () => (await import(/* webpackChunkName: "icon" */ '../pages/components/icon')).PageIcon,
    },
    {
      name: 'components.spinner',
      path: '/spinner',
      onEnter: () => chunk.active('spinner'),
      onLeave: () => chunk.deactive('spinner'),
      component: async () =>
        (await import(/* webpackChunkName: "spinner" */ '../pages/components/spinner')).PageSpinner,
    },
    {
      name: 'components.progress',
      path: '/progress',
      onEnter: () => chunk.active('progress'),
      onLeave: () => chunk.deactive('progress'),
      component: async () =>
        (await import(/* webpackChunkName: "progress" */ '../pages/components/progress')).PageProgress,
    },
    {
      name: 'components.popover',
      path: '/popover',
      onEnter: () => chunk.active('popover'),
      onLeave: () => chunk.deactive('popover'),
      component: async () =>
        (await import(/* webpackChunkName: "popover" */ '../pages/components/popover')).PagePopover,
    },
    {
      name: 'components.tooltip',
      path: '/tooltip',
      onEnter: () => chunk.active('tooltip'),
      onLeave: () => chunk.deactive('tooltip'),
      component: async () =>
        (await import(/* webpackChunkName: "tooltip" */ '../pages/components/tooltip')).PageTooltip,
    },
    {
      name: 'components.popconfirm',
      path: '/popconfirm',
      onEnter: () => chunk.active('popconfirm'),
      onLeave: () => chunk.deactive('popconfirm'),
      component: async () =>
        (await import(/* webpackChunkName: "popconfirm" */ '../pages/components/popconfirm')).PagePopconfirm,
    },
    {
      name: 'components.card',
      path: '/card',
      onEnter: () => chunk.active('card'),
      onLeave: () => chunk.deactive('card'),
      component: async () => (await import(/* webpackChunkName: "card" */ '../pages/components/card')).PageCard,
    },
    {
      name: 'components.list',
      path: '/list/:optional?',
      onEnter: () => chunk.active('list'),
      onLeave: () => chunk.deactive('list'),
      dynamic: true,
      component: async () => (await import(/* webpackChunkName: "list" */ '../pages/components/list')).PageList,
    },
    {
      name: 'components.menu',
      path: '/menu',
      onEnter: () => chunk.active('menu'),
      onLeave: () => chunk.deactive('menu'),
      component: async () => (await import(/* webpackChunkName: "menu" */ '../pages/components/menu')).PageMenu,
    },
    {
      name: 'components.drawer',
      path: '/drawer',
      onEnter: () => chunk.active('drawer'),
      onLeave: () => chunk.deactive('drawer'),
      component: async () => (await import(/* webpackChunkName: "drawer" */ '../pages/components/drawer')).PageDrawer,
    },
    {
      name: 'components.badge',
      path: '/badge',
      onEnter: () => chunk.active('badge'),
      onLeave: () => chunk.deactive('badge'),
      component: async () => (await import(/* webpackChunkName: "badge" */ '../pages/components/badge')).PageBadge,
    },
    {
      name: 'components.bottom-bar',
      path: '/bottom-bar/:sub?',
      onEnter: () => chunk.active('bottombar'),
      onLeave: () => chunk.deactive('bottombar'),
      dynamic: true,
      component: async () =>
        (await import(/* webpackChunkName: "bottombar" */ '../pages/components/bottom-bar')).PageBottomBar,
    },
    {
      name: 'components.divider',
      path: '/divider',
      onEnter: () => chunk.active('divider'),
      onLeave: () => chunk.deactive('divider'),
      component: async () =>
        (await import(/* webpackChunkName: "divider" */ '../pages/components/divider')).PageDivider,
    },
    {
      name: 'components.subheader',
      path: '/subheader',
      onEnter: () => chunk.active('subheader'),
      onLeave: () => chunk.deactive('subheader'),
      component: async () =>
        (await import(/* webpackChunkName: "subheader" */ '../pages/components/subheader')).PageSubheader,
    },
    {
      name: 'components.avatar',
      path: '/avatar',
      onEnter: () => chunk.active('avatar'),
      onLeave: () => chunk.deactive('avatar'),
      component: async () => (await import(/* webpackChunkName: "avatar" */ '../pages/components/avatar')).PageAvatar,
    },
    {
      name: 'components.snackbar',
      path: '/snackbar',
      onEnter: () => chunk.active('snackbar'),
      onLeave: () => chunk.deactive('snackbar'),
      component: async () =>
        (await import(/* webpackChunkName: "snackbar" */ '../pages/components/snackbar')).PageSnackbar,
    },
    {
      name: 'components.steppers',
      path: '/steppers',
      onEnter: () => chunk.active('steppers'),
      onLeave: () => chunk.deactive('steppers'),
      component: async () =>
        (await import(/* webpackChunkName: "steppers" */ '../pages/components/steppers')).PageSteppers,
    },
    {
      name: 'components.tabs',
      path: '/tabs/:module?/:sub?',
      onEnter: () => chunk.active('tabs'),
      onLeave: () => chunk.deactive('tabs'),
      dynamic: true,
      component: async () => (await import(/* webpackChunkName: "tabs" */ '../pages/components/tabs')).PageTabs,
    },
    {
      name: 'components.forms',
      path: '/forms',
      redirect: 'components.forms.autocomplete',
      children: [
        {
          name: 'components.forms.checkbox',
          path: '/checkbox',
          onEnter: () => chunk.active('checkbox'),
          onLeave: () => chunk.deactive('checkbox'),
          component: async () =>
            (await import(/* webpackChunkName: "checkbox" */ '../pages/components/checkbox')).PageCheckbox,
        },
        {
          name: 'components.forms.radio',
          path: '/radio',
          onEnter: () => chunk.active('radio'),
          onLeave: () => chunk.deactive('radio'),
          component: async () => (await import(/* webpackChunkName: "radio" */ '../pages/components/radio')).PageRadio,
        },
        {
          name: 'components.forms.switch',
          path: '/switch',
          onEnter: () => chunk.active('switch'),
          onLeave: () => chunk.deactive('switch'),
          component: async () =>
            (await import(/* webpackChunkName: "switch" */ '../pages/components/switch')).PageSwitch,
        },
        {
          name: 'components.forms.input',
          path: '/input',
          onEnter: () => chunk.active('input'),
          onLeave: () => chunk.deactive('input'),
          component: async () => (await import(/* webpackChunkName: "input" */ '../pages/components/input')).PageInput,
        },
        {
          name: 'components.forms.file',
          path: '/file',
          onEnter: () => chunk.active('file'),
          onLeave: () => chunk.deactive('file'),
          component: async () => (await import(/* webpackChunkName: "file" */ '../pages/components/file')).PageFile,
        },
        {
          name: 'components.forms.chips',
          path: '/chips',
          onEnter: () => chunk.active('chips'),
          onLeave: () => chunk.deactive('chips'),
          component: async () => (await import(/* webpackChunkName: "chips" */ '../pages/components/chips')).PageChips,
        },
        {
          name: 'components.forms.autocomplete',
          path: '/autocomplete',
          onEnter: () => chunk.active('autocomplete'),
          onLeave: () => chunk.deactive('autocomplete'),
          component: async () =>
            (await import(/* webpackChunkName: "autocomplete" */ '../pages/components/autocomplete')).PageAutocomplete,
        },
        {
          name: 'components.forms.select',
          path: '/select',
          onEnter: () => chunk.active('select'),
          onLeave: () => chunk.deactive('select'),
          component: async () =>
            (await import(/* webpackChunkName: "select" */ '../pages/components/select')).PageSelect,
        },
      ],
    },
    {
      name: 'components.highlight',
      path: '/highlight',
      onEnter: () => chunk.active('highlight'),
      onLeave: () => chunk.deactive('highlight'),
      component: async () =>
        (await import(/* webpackChunkName: "highlight" */ '../pages/components/highlight')).PageHighlight,
    },
    {
      name: 'components.empty-state',
      path: '/empty',
      onEnter: () => chunk.active('empty'),
      onLeave: () => chunk.deactive('empty'),
      component: async () => (await import(/* webpackChunkName: "empty" */ '../pages/components/empty')).PageEmptyState,
    },
    {
      name: 'components.datepicker',
      path: '/datepicker',
      onEnter: () => chunk.active('datepicker'),
      onLeave: () => chunk.deactive('datepicker'),
      component: async () =>
        (await import(/* webpackChunkName: "datepicker" */ '../pages/components/datepicker')).PageDatepicker,
    },
    {
      name: 'components.pagination',
      path: '/pagination',
      onEnter: () => chunk.active('pagination'),
      onLeave: () => chunk.deactive('pagination'),
      component: async () =>
        (await import(/* webpackChunkName: "pagination" */ '../pages/components/pagination')).PagePagination,
    },
    {
      name: 'components.table',
      path: '/table',
      onEnter: () => chunk.active('table'),
      onLeave: () => chunk.deactive('table'),
      component: async () => (await import(/* webpackChunkName: "table" */ '../pages/components/table')).PageTable,
    },
  ],
};

const uiElementsRoute = {
  name: 'ui',
  path: '/ui',
  redirectTo: 'ui.elevation',
  children: [
    {
      name: 'ui.elevation',
      path: '/elevation',
      onEnter: () => chunk.active('elevation'),
      onLeave: () => chunk.deactive('elevation'),
      component: async () =>
        (await import(/* webpackChunkName: "elevation" */ '../pages/ui-elements/elevation')).PageElevation,
    },
    {
      name: 'ui.layout',
      path: '/layout',
      onEnter: () => chunk.active('layout'),
      onLeave: () => chunk.deactive('layout'),
      component: async () => (await import(/* webpackChunkName: "layout" */ '../pages/ui-elements/layout')).PageLayout,
    },
    {
      name: 'ui.typography',
      path: '/typography',
      onEnter: () => chunk.active('typography'),
      onLeave: () => chunk.deactive('typography'),
      component: async () =>
        (await import(/* webpackChunkName: "typography" */ '../pages/ui-elements/typography')).PageTypography,
    },
    {
      name: 'ui.states',
      path: '/states',
      onEnter: () => chunk.active('states'),
      onLeave: () => chunk.deactive('states'),
      component: async () => (await import(/* webpackChunkName: "states" */ '../pages/ui-elements/states')).PageStates,
    },
  ],
};

export default [
  componentsRoute,
  uiElementsRoute,
  {
    name: 'home',
    path: '/',
    onEnter: () => chunk.active('home'),
    onLeave: () => chunk.deactive('home'),
    async component() {
      return (await import(/* webpackChunkName: "home" */ '../pages/home')).PageHome;
    },
  },
  {
    name: 'about',
    path: '/about',
    onEnter: () => chunk.active('about'),
    onLeave: () => chunk.deactive('about'),
    component: async () => (await import(/* webpackChunkName: "about" */ '../pages/about')).PageAbout,
  },
  {
    name: 'getting-started',
    path: '/getting-started',
    onEnter: () => chunk.active('gettingstarted'),
    onLeave: () => chunk.deactive('gettingstarted'),
    component: async () =>
      (await import(/* webpackChunkName: "gettingstarted" */ '../pages/getting-started')).PageGettingStarted,
  },
  {
    name: 'i18n',
    path: '/i18n',
    onEnter: () => chunk.active('i18n'),
    onLeave: () => chunk.deactive('i18n'),
    component: async () => (await import(/* webpackChunkName: "i18n" */ '../pages/advance/i18n')).PageI18N,
  },
  {
    name: 'theme',
    path: '/theme',
    onEnter: () => chunk.active('theme'),
    onLeave: () => chunk.deactive('theme'),
    component: async () => (await import(/* webpackChunkName: "theme" */ '../pages/advance/theme')).PageTheme,
  },
  {
    name: 'use-router',
    path: '/use-router',
    onEnter: () => chunk.active('userouter'),
    onLeave: () => chunk.deactive('userouter'),
    component: async () =>
      (await import(/* webpackChunkName: "userouter" */ '../pages/advance/use-router')).PageUseRouter,
  },
  {
    name: 'license',
    path: '/license',
    onEnter: () => chunk.active('license'),
    onLeave: () => chunk.deactive('license'),
    component: async () => (await import(/* webpackChunkName: "license" */ '../pages/license')).PageLicense,
  },
  {
    name: 'debug',
    path: '/debug',
    onEnter: () => chunk.active('debug'),
    onLeave: () => chunk.deactive('debug'),
    component: async () => (await import(/* webpackChunkName: "debug" */ '../pages/debug')).PageDebug,
  },
  {
    path: '/(.*)',
    redirect: 'home',
  },
];
