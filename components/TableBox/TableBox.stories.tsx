import { Meta, StoryObj } from "@storybook/react";
import { TableBox } from "./TableBox";

const meta: Meta<typeof TableBox> = {
  title: "TableBox",
  component: TableBox,
  args: {},
};
export default meta;

type Story = StoryObj<typeof TableBox>;

export const Default: Story = {};
