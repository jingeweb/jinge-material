export default {
  card: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'withHover',
          type: 'Boolean',
          description: 'Enables full hover elevation in card.',
          defaults: 'false'
        },
        {
          name: 'theme',
          type: 'String',
          description: 'Speficies a custom theme for the card. Works only if a theme class like <code>primary</code> or <code>accent</code> is applied to the card.',
          defaults: '-'
        }
      ]
    }
  },
  cardActions: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'alignment',
          type: 'String',
          description: 'Alignment of action buttons.',
          defaults: 'right'
        }
      ]
    }
  },
  cardArea: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'inset',
          type: 'Boolean',
          description: 'Applies a inset border.',
          defaults: 'false'
        }
      ]
    }
  },
  cardMedia: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'ratio',
          type: 'String',
          description: 'Resizes or clip the image automatically based on the following options: 1:1 or 1/1, 4:3 or 4/3 and 16:9 or 16/9.',
          defaults: 'null'
        },
        {
          name: 'medium',
          type: 'Boolean',
          description: 'Applies medium size to the media. Works only inside md-card-header.',
          defaults: 'false'
        },
        {
          name: 'big',
          type: 'Boolean',
          description: 'Applies big size to the media. Works only inside md-card-header.',
          defaults: 'false'
        }
      ]
    }
  },
  cardMediaCover: {
    props: {
      headings: ['Name', 'Description', 'Default'],
      props: [
        {
          name: 'textCcrim',
          type: 'Boolean',
          description: 'Applies a gradient background based on the image. This option increases the legibility of the text, applying background colors by extracting the amount of lightness on the image. If the image is dark the background of the text will be lighter. If it\'s not dark then the background will be darker. This will be calculated automatically.',
          defaults: 'false'
        },
        {
          name: 'solid',
          type: 'Boolean',
          description: 'Applies a solid background with the same calculation logic of the md-text-scrim.',
          defaults: 'false'
        }
      ]
    }
  }
};
