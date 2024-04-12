import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    children: "Click Here",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
