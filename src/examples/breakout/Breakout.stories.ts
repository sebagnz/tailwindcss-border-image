import type { Meta, StoryObj } from '@storybook/react'

import { Breakout } from './Breakout'

const meta = {
  title: 'Example/Breakout',
  component: Breakout,
  argTypes: {
    className: {
      table: {
        readonly: true,
      },
    },
  },
} satisfies Meta<typeof Breakout>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'This section has a border-image with a full color breakout',
    className: 'border-image-conic from-indigo-400 to-indigo-400 border-outset-x-screen',
  },
}
