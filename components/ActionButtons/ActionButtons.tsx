import { cva, VariantProps } from "cva";
import { Button } from "../Button/Button";

const ActionButtonsStyles = cva([], {
  variants: {
    styleVariants: {
      primary: "flex gap-4 p-3 bg-white rounded-md",
      secondary: "flex gap-4 pt-4",
    },
  },
  defaultVariants: { styleVariants: "primary" },
});

export type ActionButtonsProps = {
  actions: string[];
  wrapperStyleVariants?: "primary" | "secondary";
} & VariantProps<typeof ActionButtonsStyles>;

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  actions,
  wrapperStyleVariants,
}) => {
  return (
    <div
      className={ActionButtonsStyles({
        styleVariants: wrapperStyleVariants,
      })}
    >
      {actions.map((action, index) => {
        return (
          <Button
            key={"button-" + action + "-" + index}
            clickHandler={() => {
              console.log(action + " " + "Clicked!");
            }}
          >
            {action}
          </Button>
        );
      })}
    </div>
  );
};
