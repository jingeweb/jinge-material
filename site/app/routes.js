
import {
  PageAbout,
  PageHome,
  PageLicense,
  PageGettingStarted,
  PageUiElements,
  PageElevation,
  PageButton,
  PageCheckbox,
  PageRadio,
  PageSwitch,
  PageContent,
  PageToolbar,
  PageDialog,
  PageIcon,
  PageSpinner,
  PageProgress,
  PagePopover,
  PageTooltip,
  PagePopconfirm,
  PageCard,
  PageList,
  PageDebug,
  PageMenu,
  PageDrawer,
  PageBadge,
  PageBottomBar,
  PageDivider,
  PageSubheader,
  PageAvatar,
  PageSnackbar,
  PageSteppers,
  PageTabs,
  PageInput,
  PageFile,
  PageChips,
  PageAutocomplete,
  PageHighlight
} from './pages';

export const componentsStates = [{
  name: 'components',
  url: '/components',
  redirectTo: 'components.button'
}, {
  name: 'components.button',
  url: '/button',
  component: PageButton
}, {
  name: 'components.checkbox',
  url: '/checkbox',
  component: PageCheckbox
}, {
  name: 'components.radio',
  url: '/radio',
  component: PageRadio
}, {
  name: 'components.switch',
  url: '/switch',
  component: PageSwitch
}, {
  name: 'components.content',
  url: '/content',
  component: PageContent
}, {
  name: 'components.toolbar',
  url: '/toolbar',
  component: PageToolbar
}, {
  name: 'components.dialog',
  url: '/dialog',
  component: PageDialog
}, {
  name: 'components.icon',
  url: '/icon',
  component: PageIcon
}, {
  name: 'components.spinner',
  url: '/spinner',
  component: PageSpinner
}, {
  name: 'components.progress',
  url: '/progress',
  component: PageProgress
}, {
  name: 'components.popover',
  url: '/popover',
  component: PagePopover
}, {
  name: 'components.tooltip',
  url: '/tooltip',
  component: PageTooltip
}, {
  name: 'components.popconfirm',
  url: '/popconfirm',
  component: PagePopconfirm
}, {
  name: 'components.card',
  url: '/card',
  component: PageCard
}, {
  name: 'components.list',
  url: '/list/:optional',
  params: {
    optional: {
      dynamic: true, squash: true, value: null
    }
  },
  component: PageList
}, {
  name: 'components.menu',
  url: '/menu',
  component: PageMenu
}, {
  name: 'components.drawer',
  url: '/drawer',
  component: PageDrawer
}, {
  name: 'components.badge',
  url: '/badge',
  component: PageBadge
}, {
  name: 'components.bottom-bar',
  url: '/bottom-bar/:sub',
  params: {
    sub: {
      dynamic: true, squash: true, value: null
    }
  },
  component: PageBottomBar
}, {
  name: 'components.divider',
  url: '/divider',
  component: PageDivider
}, {
  name: 'components.subheader',
  url: '/subheader',
  component: PageSubheader
}, {
  name: 'components.avatar',
  url: '/avatar',
  component: PageAvatar
}, {
  name: 'components.snackbar',
  url: '/snackbar',
  component: PageSnackbar
}, {
  name: 'components.steppers',
  url: '/steppers',
  component: PageSteppers
}, {
  name: 'components.tabs',
  url: '/tabs/:module/:sub',
  params: {
    module: {
      dynamic: true, squash: true, value: null
    },
    sub: {
      dynamic: true, squash: true, value: null
    }
  },
  component: PageTabs
}, {
  name: 'components.input',
  url: '/input',
  component: PageInput
}, {
  name: 'components.file',
  url: '/file',
  component: PageFile
}, {
  name: 'components.chips',
  url: '/chips',
  component: PageChips
}, {
  name: 'components.autocomplete',
  url: '/autocomplete',
  component: PageAutocomplete
}, {
  name: 'components.highlight',
  url: '/highlight',
  component: PageHighlight
}];

export const uiElementsStates = [{
  name: 'ui-elements',
  url: '/ui-elements',
  component: PageUiElements,
  redirectTo: 'ui-elements.elevation'
}, {
  name: 'ui-elements.elevation',
  url: '/elevation',
  component: PageElevation
}];
export const singleStates = [{
  name: 'home',
  url: '/',
  component: PageHome
}, {
  name: 'getting-started',
  url: '/getting-started',
  component: PageGettingStarted
}, {
  name: 'about',
  url: '/about',
  component: PageAbout
}, {
  name: 'license',
  url: '/license',
  component: PageLicense
}, {
  name: 'debug',
  url: '/debug',
  component: PageDebug
}];
export default [
  ...componentsStates,
  ...uiElementsStates,
  ...singleStates
];
