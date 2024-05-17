import type { Meta, StoryObj } from '@storybook/react'

import { SlantBreakout } from './SlantBreakout'

const meta = {
  title: 'Example/SlantBreakout',
  component: SlantBreakout,
  argTypes: {
    className: {
      table: {
        readonly: true,
      },
    },
  },
} satisfies Meta<typeof SlantBreakout>

export default meta

type Story = StoryObj<typeof meta>

export const Opacity: Story = {
  args: {
    to: 'right',
    title: 'This section has a border-image with a full color breakout and is slanted with some transparency',
    className: 'border-image-conic border-outset-screen from-indigo-400/30 to-indigo-400/30',
  },
}

export const Filled: Story = {
  args: {
    to: 'right',
    title: 'This section has a border-image with a full color breakout and is slanted',
    className: 'border-image-conic border-outset-screen from-indigo-400 to-indigo-400',
  },
}

export const Animated: Story = {
  args: {
    to: 'right',
    title: 'This section has a border-image with a full color breakout and is slanted with a gradient and is animated',
    className: `
    transition-all
    border-image-conic
    from-indigo-400
    to-indigo-400
    border-outset-0
    hover:border-outset-screen
    hover:from-purple-600/30
    hover:to-purple-600/30
    `,
  },
}
