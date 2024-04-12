import { cx } from "cva";

export type CardProps = {
  children: React.ReactNode;
  classes?: string;
};

export const Card: React.FC<CardProps> = ({ children, classes }) => {
  return (
    <div
      className={cx(
        "border border-solid border-slate-300 rounded-md w-[46.3rem]",
        classes
      )}
    >
      {children}
    </div>
  );
};
