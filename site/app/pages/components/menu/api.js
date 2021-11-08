import { vm, _t } from 'jinge';

import { interactionEvents } from '../../../../../src/_util';

function getEventNames() {
  return interactionEvents.map((event) => `<li>${event}</li>`).join('');
}

export default () =>
  vm({
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'active',
          type: 'Boolean',
          description: _t('控制菜单的打开和关闭'),
          defaults: 'false',
        },
        {
          name: 'closeOnOutsideClick',
          type: 'Boolean',
          description: _t('如果此选项为 true，则在菜单外部发生任何单击事件后，菜单将关闭。'),
          defaults: 'true',
        },
        {
          name: 'closeOnSelect',
          type: 'Boolean',
          description:
            _t(
              '如果此选项为 true，则单击 <code>md-menu-item</code>后，菜单将关闭。仅当菜单具有以下事件之一时，此功能才有效：',
            ) + `<br><ul>${getEventNames()}</ul>`,
          defaults: 'true',
        },
        {
          name: 'placement',
          type: 'String',
          description: _t('设置菜单的位置。支持所有 popper.js 的参数。'),
          defaults: 'bottom-start',
        },
        {
          name: 'offset',
          type: 'Number/String',
          description: _t('设置自定义偏移量。支持数字，或 popper.js 的参数。默认情况下，将相对于触发器计算偏移量。'),
          defaults: 'null',
        },
        {
          name: 'size',
          type: 'String',
          description: _t('设置菜单的大小。请参见下面每种尺寸的详细说明。'),
          defaults: 'small',
        },
        {
          offset: true,
          name: 'size="small"',
          type: 'String',
          description: _t('设置小尺寸菜单（112px）'),
          defaults: '-',
        },
        {
          offset: true,
          name: 'size="medium"',
          type: 'String',
          description: _t('设置中等大小（168px）的菜单'),
          defaults: '-',
        },
        {
          offset: true,
          name: 'size="big"',
          type: 'String',
          description: _t('设置大尺寸菜单（224px）'),
          defaults: '-',
        },
        {
          offset: true,
          name: 'size="huge"',
          type: 'String',
          description: _t('设置一个巨大的菜单（280px）'),
          defaults: '-',
        },
        {
          offset: true,
          name: 'size="auto"',
          type: 'String',
          description: _t('菜单大小自动适应内容'),
          defaults: '-',
        },
      ],
    },
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'opened',
          description: _t('菜单打开时触发'),
          value: 'null',
        },
        {
          name: 'closed',
          description: _t('菜单关闭时触发'),
          value: 'null',
        },
      ],
    },
  });
