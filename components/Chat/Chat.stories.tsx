import { Meta, StoryObj } from "@storybook/react";
import { Chat } from "./Chat";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const meta: Meta<typeof Chat> = {
  title: "Chat",
  component: Chat,
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

type Story = StoryObj<typeof Chat>;

export const Default: Story = {};
