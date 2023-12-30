import type { Meta, StoryObj } from '@storybook/react'
import HandleBtn from './HandleBtn'

const meta: Meta<typeof HandleBtn> = {
  title: 'HandleBtn',
  component: HandleBtn,
}

export default meta

type Story = StoryObj<typeof HandleBtn>

export const WindowHandle: Story = {
  args: {
    color: 'red',
  },
}
