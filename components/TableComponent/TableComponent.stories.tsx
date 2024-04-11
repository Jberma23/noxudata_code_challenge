import { Meta, StoryObj } from "@storybook/react";
import { TableComponent } from "./TableComponent";

const meta: Meta<typeof TableComponent> = {
  title: "TableComponent",
  component: TableComponent,
  args: {
    tableHeaders: [
      { title: "", sortable: true },
      { title: "Name", sortable: true },
      { title: "Industry", sortable: false },
      { title: "City", sortable: true },
      { title: "State", sortable: true },
      { title: "Segment", sortable: false },
      { title: "Owner ID", sortable: true },
    ],
    tableData: [
      {
        id: "477",
        name: "Abbott - Pacocha",
        industry: "IT",
        city: "Colorado",
        state: "CO",
        segment: "Entertainment",
        ownerId: "7",
      },
      {
        id: "477",
        name: "Abbott - Pacocha",
        industry: "IT",
        city: "Colorado",
        state: "CO",
        segment: "Entertainment",
        ownerId: "7",
      },
      {
        id: "477",
        name: "Abbott - Pacocha",
        industry: "IT",
        city: "Colorado",
        state: "CO",
        segment: "Entertainment",
        ownerId: "7",
      },
      {
        id: "477",
        name: "Abbott - Pacocha",
        industry: "IT",
        city: "Colorado",
        state: "CO",
        segment: "Entertainment",
        ownerId: "7",
      },
      {
        id: "477",
        name: "Abbott - Pacocha",
        industry: "IT",
        city: "Colorado",
        state: "CO",
        segment: "Entertainment",
        ownerId: "7",
      },
      {
        id: "477",
        name: "Abbott - Pacocha",
        industry: "IT",
        city: "Colorado",
        state: "CO",
        segment: "Entertainment",
        ownerId: "7",
      },
      {
        id: "477",
        name: "Abbott - Pacocha",
        industry: "IT",
        city: "Colorado",
        state: "CO",
        segment: "Entertainment",
        ownerId: "7",
      },
      {
        id: "477",
        name: "Abbott - Pacocha",
        industry: "IT",
        city: "Colorado",
        state: "CO",
        segment: "Entertainment",
        ownerId: "7",
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof TableComponent>;

export const Default: Story = {};
