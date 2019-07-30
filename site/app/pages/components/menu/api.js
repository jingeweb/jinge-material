import {
  interactionEvents
} from '../../../../../src/_util';

function getEventNames() {
  return interactionEvents.map(event => `<li>${event}</li>`).join('');
}

export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'active',
        type: 'Boolean',
        description: 'Used to show/hide a menu programatically.',
        defaults: 'false'
      },
      {
        name: 'closeOnOutsideClick',
        type: 'Boolean',
        description: 'When this options is true, the menu will be closed after any click event.',
        defaults: 'true'
      },
      {
        name: 'closeOnSelect',
        type: 'Boolean',
        description: `
          When this options is true, the menu will close after a click on a <code>md-menu-item</code>. This will only work if the menu have one of the events below: <br>
          <ul>${getEventNames()}</ul>`,
        defaults: 'true'
      },
      {
        name: 'placement',
        type: 'String',
        description: 'Set the placement of a menu. Support all popper.js placements.',
        defaults: 'bottom-start'
      },
      {
        name: 'offset',
        type: 'Number/String',
        description: 'Sets a custom offset. Support number or popper.js offset. By default will caculate offset relative to trigger.',
        defaults: 'null'
      },
      {
        name: 'size',
        type: 'String',
        description: 'Sets the size of a menu. See below the detailed description of each size.',
        defaults: 'small'
      },
      {
        offset: true,
        name: 'size="small"',
        type: 'String',
        description: 'Sets a menu with a small size (112px)',
        defaults: '-'
      },
      {
        offset: true,
        name: 'size="medium"',
        type: 'String',
        description: 'Sets a menu with a medium size (168px)',
        defaults: '-'
      },
      {
        offset: true,
        name: 'size="big"',
        type: 'String',
        description: 'Sets a menu with a big size (224px)',
        defaults: '-'
      },
      {
        offset: true,
        name: 'size="huge"',
        type: 'String',
        description: 'Sets a menu with a huge size (280px)',
        defaults: '-'
      },
      {
        offset: true,
        name: 'size="auto"',
        type: 'String',
        description: 'Sets a menu with a auto size',
        defaults: '-'
      }
    ]
  },
  events: {
    headings: ['Name', 'Description', 'Value'],
    props: [
      {
        name: 'opened',
        description: 'Triggered when menu opens',
        value: 'null'
      },
      {
        name: 'closed',
        description: 'Triggered when menu closes',
        value: 'null'
      }
    ]
  }
};
