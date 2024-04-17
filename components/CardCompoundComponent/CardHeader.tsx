import { cx } from "cva";

export type CardHeaderProps = {
  children: React.ReactNode;
  classes?: string;
};
export const CardHeader = ({ children, classes }: CardHeaderProps) => {
  return <div className={cx(classes)}>{children}</div>;
};
