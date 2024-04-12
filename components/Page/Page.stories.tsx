import { Meta, StoryObj } from "@storybook/react";
import { Dashboard } from "./Page";

const meta: Meta<typeof Dashboard> = {
  title: "Page",
  component: Dashboard,
  args: {},
};
export default meta;

type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {};
