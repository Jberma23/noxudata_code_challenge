import { cx } from "cva";

type CardFooterProps = {
  children: React.ReactNode;
  classes?: string;
};
export const CardFooter = ({ children, classes }: CardFooterProps) => {
  return <div className={cx(classes)}>{children}</div>;
};
