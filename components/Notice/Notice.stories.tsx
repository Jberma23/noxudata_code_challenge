import { Meta, StoryObj } from "@storybook/react";
import { Notice } from "./Notice";

const meta: Meta<typeof Notice> = {
  title: "Notice",
  component: Notice,
  args: {
    dismissButtonText: "X",
    noticeText: "Only X rows are shown. View full list for more",
  },
};
export default meta;

type Story = StoryObj<typeof Notice>;

export const Default: Story = {};
