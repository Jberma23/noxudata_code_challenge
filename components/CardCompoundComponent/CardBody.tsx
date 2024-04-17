import { cx } from "cva";

type CardBodyProps = {
  children: React.ReactNode;
  classes?: string;
};
export const CardBody = ({ children, classes }: CardBodyProps) => {
  return <div className={cx(classes)}>{children}</div>;
};
