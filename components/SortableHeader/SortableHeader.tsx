import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export type SortableHeaderProps = {
  header?: { title: string; sortable: boolean };
  clickHandler: () => void;
};

export const SortableHeader: React.FC<SortableHeaderProps> = ({
  header,
  clickHandler,
}) => {
  return (
    <>
      <th scope="col" className="h-10w-fit font-medium">
        <button
          className="group inline-flex text-slate-500 text-base text-nowrap"
          onClick={clickHandler}
        >
          {header?.title}
          <span className="ml-2 flex-none rounded bg-gray-100 group-hover:bg-gray-200 self-start">
            <ChevronUpDownIcon className="h-4 w-4 mt-1" aria-hidden="true" />
          </span>
        </button>
      </th>
    </>
  );
};
