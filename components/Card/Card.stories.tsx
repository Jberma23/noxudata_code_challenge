import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Header } from "../DashboardHeader/DashboardHeader";
import {
  actionButtons,
  avatarAlt,
  avatarSrc,
  callToActions,
  headerText,
  tableData,
  tableHeaders,
} from "../Page/data";
import { Body } from "../DashboardBody/DashboardBody";
import { Footer } from "../DashboardFooter/DashboardFooter";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  args: {
    children: <div className="text-black p-60">Card Content</div>,
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
