import { Button } from "../Button/Button";
import { cva, VariantProps } from "cva";
import React, { HTMLInputTypeAttribute } from "react";

const wrapperStyles = cva([], {
  variants: {
    styleVariants: {
      primary:
        "w-full relative -ml-px inline-flex items-center rounded-r-md bg-white  py-2 text-slate-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 font-semibold pr-3",
    },
  },
  defaultVariants: { styleVariants: "primary" },
});
const InputStyles = cva([], {
  variants: {
    styleVariants: {
      primary:
        "block w-full max-h-9 border-t-1 border-t-slate-300 border-b-1 border-b-slate-300 border-l-1 border-l-slate-300 border-r-0 placeholder:text-slate-400 active:border-0 text-base font-normal",
    },
  },
  defaultVariants: { styleVariants: "primary" },
});

export type InputProps = {
  inputStyleVariants?: "primary";
  wrapperStyleVariants?: "primary";
  icon?: React.ReactNode;
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder?: string;
  ariaDescribedBy?: string;
  onChange: (text: string) => void;
  clickableIcon?: boolean;
  iconClickHandler?: () => void;
  value: string;
} & VariantProps<typeof InputStyles>;

export const Input: React.FC<InputProps> = ({
  inputStyleVariants = "primary",
  wrapperStyleVariants = "primary",
  icon,
  type,
  name,
  id,
  placeholder,
  ariaDescribedBy,
  onChange,
  clickableIcon,
  iconClickHandler,
  value,
}) => {
  return (
    <span className={wrapperStyles({ styleVariants: wrapperStyleVariants })}>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className={InputStyles({ styleVariants: inputStyleVariants })}
        placeholder={placeholder}
        aria-describedby={ariaDescribedBy}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></input>
      {clickableIcon ? (
        <Button
          clickHandler={iconClickHandler}
          displayLabel={false}
          styleVariant={"hiddenButton"}
        >
          {icon}
        </Button>
      ) : (
        icon
      )}
    </span>
  );
};
