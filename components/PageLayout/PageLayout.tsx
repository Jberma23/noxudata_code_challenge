import { ReactNode } from "react";

export const PageLayoutHeader = ({ children }: { children: ReactNode }) => {
  return <div className="w-full h-24 bg-white px-36 py-8">{children}</div>;
};

export const PageLayoutFooter = ({ children }: { children: ReactNode }) => {
  return <div className="bg-white w-full h-36 pl-36">{children}</div>;
};

export const PageLayoutBody = ({ children }: { children: ReactNode }) => {
  return <div className="h-[32.25rem] bg-slate-100 pt-8 pl-36">{children}</div>;
};
