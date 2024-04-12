import { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button/Button";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
// relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-[#F0671A] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 font-semibold
//relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-[#F0671A] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 font-semibold
const meta: Meta<typeof ButtonGroup> = {
  title: "ButtonGroup",
  component: ButtonGroup,
  args: {
    children: (
      <>
        <Button styleVariant="buttonGroupLeft">
          <InformationCircleIcon
            className="h-8 w-8 inline pr-[6px]"
            strokeWidth={"2"}
          />
          Not Confident
        </Button>
        <Button styleVariant="buttonGroupRight">
          Human Help
          <ArrowRightIcon
            className="h-8 w-8 inline pl-[6px]"
            strokeWidth={"2"}
          ></ArrowRightIcon>
        </Button>
      </>
    ),
  },
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {};
