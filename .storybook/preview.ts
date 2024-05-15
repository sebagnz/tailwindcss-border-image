import type { Preview } from '@storybook/react'

import '../src/global.css'

const preview: Preview = {
  parameters: {
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
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
