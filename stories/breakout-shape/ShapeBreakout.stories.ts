import type { Meta, StoryObj } from '@storybook/react'

import { ShapeBreakout } from './ShapeBreakout'

const meta = {
  title: 'Example/ShapeBreakout',
  component: ShapeBreakout,
  argTypes: {
    className: {
      table: {
        readonly: true,
      },
    },
  },
} satisfies Meta<typeof ShapeBreakout>

export default meta

type Story = StoryObj<typeof meta>

export const Left: Story = {
  args: {
    title: 'An image with a breackout to the left',
    className:
      'outline outline-[.5rem] outline-indigo-300 border-image-conic from-indigo-400 to-indigo-300 border-slice-l-1 border-slice-no-fill border-image-width-x-1/2 border-outset-y-2 border-outset-x-screen',
  },
}

export const Right: Story = {
  args: {
    title: 'An image with a breackout to the right',
    className:
      'outline outline-[.5rem] outline-indigo-300 border-image-conic from-indigo-400 to-indigo-300 border-slice-r-1 border-slice-no-fill border-image-width-x-1/2 border-outset-y-2 border-outset-x-screen',
  },
}

export const Animated: Story = {
  args: {
    title: 'An image with a breackout to the right and animated',
    className: `
      outline-indigo-300
      border-image-conic
      from-indigo-400
      to-indigo-300
      border-slice-r-1
      border-slice-no-fill
      transition-[border-image-outset,outline] origin-left duration-500
      outline hover:outline-[.5rem]
      border-image-width-x-0 hover:border-image-width-x-1/2
      border-outset-y-0 hover:border-outset-y-2
      border-outset-x-0 hover:border-outset-x-screen
      `,
  },
}
