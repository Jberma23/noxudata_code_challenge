import { Meta, StoryObj } from "@storybook/react";
import { DashboardHeader } from "./DashboardHeader";
import { avatarAlt, avatarSrc, headerText } from "../Page/data";

const meta: Meta<typeof DashboardHeader> = {
  title: "DashboardHeader",
  component: DashboardHeader,
  args: {
    avatarSrc: avatarSrc,
    avatarAlt: avatarAlt,
    headerText: headerText,
  },
};
export default meta;

type Story = StoryObj<typeof DashboardHeader>;

export const Default: Story = {};
