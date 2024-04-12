import { Meta, StoryObj } from "@storybook/react";
import { ActionButtons } from "./ActionButtons";

const meta: Meta<typeof ActionButtons> = {
  title: "ActionButtons",
  component: ActionButtons,
  args: {
    actions: ["Show Full List", "Show Query", "Show Chart", "Pin to Dashboard"],
  },
};
export default meta;

type Story = StoryObj<typeof ActionButtons>;

export const Default: Story = {};
