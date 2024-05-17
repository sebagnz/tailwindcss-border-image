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

export const Animated: Story = {
  args: {
    title: 'This section has a border-image with a full color breakout and is animated',
    className: `
    transition-all
    ease-in-out
    duration-300
    border-image-conic
    from-indigo-400
    to-indigo-400
    border-outset-0
    hover:border-outset-x-screen
    hover:border-outset-y-10
    hover:from-purple-600/30
    hover:to-purple-600/30`,
  },
}
