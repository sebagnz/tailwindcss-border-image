import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from './Heading'

const meta = {
  title: 'Example/Heading',
  component: Heading,
  argTypes: {
    className: {
      table: {
        readonly: true,
      },
    },
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Variant1: Story = {
  args: {
    title: 'A very fancy title',
    className: 'border-image-gradient-to-t from-indigo-400 from-10% to-indigo-100 to-0%',
  },
}

export const Variant2: Story = {
  args: {
    title: 'A fancy title with a breakout to the right',
    className: 'border-image-gradient-to-t from-indigo-400 from-10% to-transparent to-0% border-outset-r-screen',
  },
}

export const Variant3: Story = {
  args: {
    title: 'A shorter one',
    className: 'w-fit border-image-gradient-to-t from-red-700 from-[10%] to-transparent to-0% border-outset-l-screen',
  },
}

export const Variant4: Story = {
  args: {
    title: 'You might get crazy',
    className:
      'border-image-repeating from-red-600 from-[0_10px] via-orange-500 via-[0_20px] to-yellow-500 to-[0_30px] border-image-width-t-[calc(100%-5px)] border-repeat-repeat',
  },
}
