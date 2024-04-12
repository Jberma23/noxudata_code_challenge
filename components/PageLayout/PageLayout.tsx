import { cx } from "cva";
import { ReactNode } from "react";

const pagePadding = "px-36";
export const PageLayoutHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cx("w-full h-24 bg-white py-8", pagePadding)}>
      {children}
    </div>
  );
};

export const PageLayoutBody = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cx("h-[32.25rem] bg-slate-100 pt-8", pagePadding)}>
      {children}
    </div>
  );
};

export const PageLayoutFooter = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cx("bg-white w-full h-36", pagePadding)}>{children}</div>
  );
};
