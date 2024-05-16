import type { Preview } from '@storybook/react'

import '../stories/global.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Example', ['Breakout', 'SlantBreakout', 'Overlay', 'Heading', 'ShapeBreakout']],
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'base',
      values: [
        {
          name: 'base',
          value: '#1e293b',
        },
      ],
    },
  },
}

export default preview
