import { Meta, StoryObj } from "@storybook/react";
import { FooterBox } from "./FooterBox";

const meta: Meta<typeof FooterBox> = {
  title: "FooterBox",
  component: FooterBox,
  args: {},
};
export default meta;

type Story = StoryObj<typeof FooterBox>;

export const Default: Story = {};
