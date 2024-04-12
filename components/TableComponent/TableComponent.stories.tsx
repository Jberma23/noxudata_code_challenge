import { Meta, StoryObj } from "@storybook/react";
import { TableComponent } from "./TableComponent";
import { tableData } from "../Page/data";

const meta: Meta<typeof TableComponent> = {
  title: "TableComponent",
  component: TableComponent,
  args: {
    tableData: tableData,
  },
};
export default meta;

type Story = StoryObj<typeof TableComponent>;

export const Default: Story = {};
