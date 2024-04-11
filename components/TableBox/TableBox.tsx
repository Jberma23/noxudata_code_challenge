import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { TableComponent } from "../TableComponent/TableComponent";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { OwlIcon } from "../Icons/OwlIcon";

export type TableBoxProps = {};

export const TableBox: React.FC<TableBoxProps> = ({}) => {
  const tableHeaders = [
    { title: "", sortable: true },
    { title: "Name", sortable: true },
    { title: "Industry", sortable: false },
    { title: "City", sortable: true },
    { title: "State", sortable: true },
    { title: "Segment", sortable: false },
    { title: "Owner ID", sortable: true },
  ];
  const tableData = [
    {
      id: "477",
      name: "Abbott - Pacocha",
      industry: "IT",
      city: "Colorado",
      state: "CO",
      segment: "Entertainment",
      ownerId: "7",
    },
    {
      id: "477",
      name: "Abbott - Pacocha",
      industry: "IT",
      city: "Colorado",
      state: "CO",
      segment: "Entertainment",
      ownerId: "7",
    },
    {
      id: "477",
      name: "Abbott - Pacocha",
      industry: "IT",
      city: "Colorado",
      state: "CO",
      segment: "Entertainment",
      ownerId: "7",
    },
    {
      id: "477",
      name: "Abbott - Pacocha",
      industry: "IT",
      city: "Colorado",
      state: "CO",
      segment: "Entertainment",
      ownerId: "7",
    },
    {
      id: "477",
      name: "Abbott - Pacocha",
      industry: "IT",
      city: "Colorado",
      state: "CO",
      segment: "Entertainment",
      ownerId: "7",
    },
    {
      id: "477",
      name: "Abbott - Pacocha",
      industry: "IT",
      city: "Colorado",
      state: "CO",
      segment: "Entertainment",
      ownerId: "7",
    },
    {
      id: "477",
      name: "Abbott - Pacocha",
      industry: "IT",
      city: "Colorado",
      state: "CO",
      segment: "Entertainment",
      ownerId: "7",
    },
    {
      id: "477",
      name: "Abbott - Pacocha",
      industry: "IT",
      city: "Colorado",
      state: "CO",
      segment: "Entertainment",
      ownerId: "7",
    },
  ];
  return (
    <div className="w-[1100px] h-[516px] bg-slate-100">
      <div className="ml-[150px]">
        <div className="pt-4">
          <span className="w-[296px] h-[36px] isolate inline-flex rounded-md shadow-sm">
            <span className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-[#F0671A] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 font-semibold">
              <InformationCircleIcon
                className="h-8 w-8 inline pr-[6px]"
                strokeWidth={"2"}
              />
              Not Confident
            </span>
            <span className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-[#F0671A] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 font-semibold">
              Human Help
              <ArrowRightIcon
                className="h-8 w-8 inline pl-[6px]"
                strokeWidth={"2"}
              ></ArrowRightIcon>
            </span>
          </span>
        </div>
        <div className="pt-4">
          <OwlIcon classes="inline" />
          <p className="text-slate-900 inline font-normal text-base pl-4">
            To find out how many accounts you have, you can use the following
            query:
          </p>
        </div>
        <div className="ml-[56px]">
          <TableComponent tableHeaders={tableHeaders} tableData={tableData} />
        </div>
      </div>
    </div>
  );
};
