import { Meta, StoryObj } from "@storybook/react";
import { DashboardBody } from "./DashboardBody";

const meta: Meta<typeof DashboardBody> = {
  title: "DashboardBody",
  component: DashboardBody,
  args: {},
};
export default meta;

type Story = StoryObj<typeof DashboardBody>;

export const Default: Story = {};
