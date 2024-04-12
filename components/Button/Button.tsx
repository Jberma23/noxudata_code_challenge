import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { cva, VariantProps } from "cva";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

const ButtonStyles = cva([,], {
  variants: {
    variant: {
      primary:
        "rounded-md bg-white px-3.5 py-2.5 text-sm font-medium shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 text-slate-900",
      secondary:
        "relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-[#F0671A] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 font-semibold",
      send: "inline text-nowrap w-[5.875rem] rounded-md bg-white px-3.5 ml-4 text-sm font-semibold text-[#DC2626] shadow-sm ring-1 ring-inset ring-[#DC2626] hover:bg-slate-50",
      buttonGroupLeft:
        "relative inline-flex items-center rounded-l-md px-2 bg-white text-[#F0671A] border-t border-b border-l border-solid border-slate-300 hover:bg-gray-50 focus:z-10 font-semibold",
      buttonGroupRight:
        "relative inline-flex items-center rounded-r-md px-2 bg-white text-[#F0671A] border-t border-b border-r border-l border-solid border-slate-300 hover:bg-gray-50 focus:z-10 font-semibold",
      chatButton:
        "relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-slate-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 font-semibold",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonProps = {
  children: React.ReactNode;
  styleVariant?: any;
  clickHandler?: () => void;
} & VariantProps<typeof ButtonStyles>;

export const Button: React.FC<ButtonProps> = ({
  children,
  styleVariant,
  clickHandler,
}) => {
  return (
    <button
      type="button"
      onClick={clickHandler}
      className={ButtonStyles({ variant: styleVariant })}
    >
      {children}
    </button>
  );
};

const iconStyles = "h-8 w-8 inline pr-[6px]";

export const HelperButtons = () => {
  return (
    <ButtonGroup>
      <Button
        styleVariant="buttonGroupLeft"
        clickHandler={() => console.log("click")}
      >
        <InformationCircleIcon className={iconStyles} strokeWidth={"2"} />
        Not Confident
      </Button>
      <Button
        styleVariant="buttonGroupRight"
        clickHandler={() => console.log("click")}
      >
        Human Help
        <ArrowRightIcon
          className={iconStyles}
          strokeWidth={"2"}
        ></ArrowRightIcon>
      </Button>
    </ButtonGroup>
  );
};
