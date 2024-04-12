import { ReactNode } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export const Table = ({ children }: { children: ReactNode }) => {
  return <table className="w-full table-auto">{children}</table>;
};
export const TableHeaderRow = ({ children }: { children: ReactNode }) => {
  return <tr className="text-left">{children}</tr>;
};
export const TableBodyRow = ({ children }: { children: ReactNode }) => {
  return (
    <tr className="h-10 text-base text-slate-900 text-left">{children}</tr>
  );
};
export const SortableTableHeader = ({
  children,
  clickHandler,
}: {
  children: ReactNode;
  clickHandler: () => void;
}) => {
  return (
    <TableHeader>
      <button className="group inline-flex text-nowrap" onClick={clickHandler}>
        {children}
        <span className="ml-2 bg-gray-100 group-hover:bg-gray-200">
          <ChevronUpDownIcon className="h-4 w-4 mt-1" aria-hidden="true" />
        </span>
      </button>
    </TableHeader>
  );
};
export const TableHeader = ({ children }: { children: ReactNode }) => {
  return <th className="font-medium text-slate-500">{children}</th>;
};
export const TableBody = ({ children }: { children: ReactNode }) => {
  return (
    <tbody className="divide-y divide-gray-200 bg-white text-left">
      {children}
    </tbody>
  );
};
