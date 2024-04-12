import { Meta, StoryObj } from "@storybook/react";
import { ChatBar } from "./ChatBar";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const meta: Meta<typeof ChatBar> = {
  title: "ChatBar",
  component: ChatBar,
  args: {
    actionButtonText: "End Chat",
    selectButtonIcon: (
      <ChevronUpDownIcon className="h-4 w-4" aria-hidden="true" />
    ),
    selectionTypeIcon: (
      <ChatBubbleOvalLeftIcon className="h-5 w-5" aria-hidden="true" />
    ),
    selectButtonText: "Chat",
  },
};
export default meta;

type Story = StoryObj<typeof ChatBar>;

export const Default: Story = {};
