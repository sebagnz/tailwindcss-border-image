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
    className: 'from-indigo-400/30 to-indigo-400/30',
  },
}

export const Filled: Story = {
  args: {
    to: 'right',
    title: 'This section has a border-image with a full color breakout and is slanted',
    className: 'from-indigo-400 to-indigo-400',
  },
}
