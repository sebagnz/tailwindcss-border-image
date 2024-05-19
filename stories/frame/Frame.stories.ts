import type { Meta, StoryObj } from '@storybook/react'

import { Frame } from './Frame'

const meta = {
  title: 'Example/Frame',
  component: Frame,
  argTypes: {
    className: {
      table: {
        readonly: true,
      },
    },
  },
} satisfies Meta<typeof Frame>

export default meta

type Story = StoryObj<typeof meta>

export const Gradient: Story = {
  args: {
    title: 'This section has a border-image, with a gradient border',
    className:
      'border-image-gradient-to-tr from-indigo-900 to-indigo-200 border-slice-1 border-slice-no-fill border-image-width-2 p-4',
  },
}

export const GradientTransparent: Story = {
  args: {
    title: 'This section has a border-image, with a gradient border to transparent',
    className: `
    border-image-gradient-to-br
    from-indigo-900
    via-transparent
    via-30%
    border-slice-1
    border-slice-no-fill
    border-image-width-t-1
    border-image-width-l-1
    `,
  },
}

export const GradientTransparentAnimated: Story = {
  args: {
    title: 'This section has a border-image, with a gradient border to transparent and changes on hover with animation',
    className: `
    border-image-gradient-to-br
    from-indigo-900
    via-transparent
    via-30%
    border-slice-1
    border-slice-no-fill
    border-image-width-t-1
    border-image-width-r-0
    border-image-width-b-0
    border-image-width-l-1
    transition-all
    duration-500
    hover:border-image-width-r-1
    hover:border-image-width-b-1
    hover:hover:to-indigo-900
    hover:via-indigo-300
    hover:via-50%
    `,
  },
}
