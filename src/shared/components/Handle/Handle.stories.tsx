import type { Meta, StoryObj } from "@storybook/react";
import { Handle } from "./index.tsx";

const meta: Meta<typeof Handle> = {
  title: "Handle",
  component: Handle,
};

export default meta;

type Story = StoryObj<typeof Handle>;

export const WindowHandle: Story = {
  args: {
    name: "Test interface",
    id: "test",
  },
};
