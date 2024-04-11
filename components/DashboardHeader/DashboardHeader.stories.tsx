import { Meta, StoryObj } from "@storybook/react";
import { DashboardHeader } from "./DashboardHeader";

const meta: Meta<typeof DashboardHeader> = {
  title: "DashboardHeader",
  component: DashboardHeader,
  args: {},
};
export default meta;

type Story = StoryObj<typeof DashboardHeader>;

export const Default: Story = {};
