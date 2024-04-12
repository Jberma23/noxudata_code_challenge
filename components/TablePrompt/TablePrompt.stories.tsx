import { Meta, StoryObj } from "@storybook/react";
import { TablePrompt } from "./TablePrompt";
import { OwlIcon } from "../Icons/OwlIcon";

const meta: Meta<typeof TablePrompt> = {
  title: "TablePrompt",
  component: TablePrompt,
  args: {
    icon: <OwlIcon classes="inline" />,
    text: "To find out how many accounts you have, you can use the following query:",
  },
};
export default meta;

type Story = StoryObj<typeof TablePrompt>;

export const Default: Story = {};
