import { Meta, StoryObj } from "@storybook/react";
import { DashboardFooter } from "./DashboardFooter";

const meta: Meta<typeof DashboardFooter> = {
  title: "DashboardFooter",
  component: DashboardFooter,
  args: {},
};
export default meta;

type Story = StoryObj<typeof DashboardFooter>;

export const Default: Story = {};
