import { Meta, StoryObj } from "@storybook/react";
import { FinalComponent } from "./FinalComponent";

const meta: Meta<typeof FinalComponent> = {
  title: "FinalComponent",
  component: FinalComponent,
  args: {},
};
export default meta;

type Story = StoryObj<typeof FinalComponent>;

export const Default: Story = {};
