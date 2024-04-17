import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "CompoundCard",
  component: Card,
  args: {},
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card>
      <Card.Header classes="py-5 text-black">Header</Card.Header>
      <Card.Body classes="py-5 text-amber-500">Body</Card.Body>
      <Card.Footer classes="py-5 text-lime-700">Footer</Card.Footer>
    </Card>
  ),
};
