import type { Meta, StoryObj } from '@storybook/react'

import { Overlay } from './Overlay'

const meta = {
  title: 'Example/Overlay',
  component: Overlay,
  argTypes: {
    className: {
      table: {
        readonly: true,
      },
    },
  },
} satisfies Meta<typeof Overlay>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'background-image & border-image overlay (Hover to see original)',
    className: 'border-image-gradient-to-b from-black/30 to-black hover:border-image-none',
  },
}
