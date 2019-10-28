export default {
  breakpoints: {
    props: {
      headings: ['Name', 'Size', 'Description'],
      props: [
        {
          name: 'xsmall',
          description: 'Applicable to screens that are maximum 599px wide. For small, medium and large handsets in portrait. Also applies to small tablets in portrait.',
          value: '<599px'
        },
        {
          name: 'small',
          description: 'Applicable to screens that are between 600px and 959px wide. For medium and large handsets in landscape. For small and large tablets in portrait mode and for some desktop monitors.',
          value: '959px'
        },
        {
          name: 'medium',
          description: 'Applicable to screens that are between 960px and 1279px wide. For small and large tablets in landscape and desktop monitors.',
          value: '1279px'
        },
        {
          name: 'large',
          description: 'Applicable to screens that are between 1280px and 1919px wide. For large desktop monitors.',
          value: '1919px'
        },
        {
          name: 'xlarge',
          description: 'Applicable to screens wider than 1920px. For huge desktop monitors or side-by-side screens.',
          value: '>1920px'
        }
      ]
    }
  },
  gutter: {
    props: {
      headings: ['Screen Size', 'Amount'],
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
    }
  },
  layout: {
    headings: ['Name', 'Description'],
    props: [
      {
        name: 'md-gutter',
        description: 'Enable the automatic gutter space between layout items.'
      },
      {
        name: 'md-layout-nowrap',
        description: 'By default the layout items will always be wrapped under the parent layout. Use this class if you want to disable this behaviour, but the responsiveness will not work.'
      },
      {
        name: 'md-alignment-<code>[x]</code>-<code>[y]</code>',
        description: `Sets the alignment of all children based on a value per coordinate. The alignment only works if both x and y are present e.g. <code>md-alignment-top-center</code>. The possible values are: <br>
          <ul>
            <li>top</li>
            <li>center</li>
            <li>left</li>
            <li>space-around</li>
            <li>space-between</li>
          </ul>
        `
      }
    ]
  },
  item: {
    headings: ['Name', 'Description'],
    props: [
      {
        name: 'md-size-<code>[amount]</code>',
        description: 'Sets a size to a particular item. The value can be multiples of 5, e.g. <code>md-size-25</code>. Also accepts 33, 66 and 100 for easy prototyping.'
      },
      {
        name: `md-<code>[breakpoint]</code>-size-<code>[amount]</code>',
        description: 'Sets a size to a particular item for a particular breakpoint. The breakpoints follow the <a href="https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints" target="_blank">Material Design guidelines</a> for layout. The possible values are:
          <ul>
            <li>xsmall</li>
            <li>small</li>
            <li>medium</li>
            <li>large</li>
            <li>xlarge</li>
          </ul>
        `
      }
    ]
  },
  hide: {
    headings: ['Name', 'Description'],
    props: [
      {
        name: 'md-<code>[breakpoint]</code>-hide',
        description: `Hides a particular element for a particular breakpoint. The breakpoints follow the <a href="https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints" target="_blank">Material Design guidelines</a> for layout. The possible values are:
          <ul>
            <li>xsmall</li>
            <li>small</li>
            <li>medium</li>
            <li>large</li>
            <li>xlarge</li>
          </ul>
        `
      }
    ]
  }
};
