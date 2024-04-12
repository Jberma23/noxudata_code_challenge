import { Meta, StoryObj } from "@storybook/react";
import { SortableHeader } from "./SortableHeader";
import { fn } from "@storybook/test";

const meta: Meta<typeof SortableHeader> = {
  title: "SortableHeader",
  component: SortableHeader,
  args: {
    header: { title: "name", sortable: true },
    clickHandler: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof SortableHeader>;

export const Default: Story = {};
