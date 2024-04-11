import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { cx } from "cva";

export type TableComponentProps = {
  tableHeaders: { title: string; sortable: boolean }[];
  tableData: {
    id: string;
    name: string;
    industry: string;
    city: string;
    state: string;
    segment: string;
    ownerId: string;
  }[];
};
const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];
export const TableComponent: React.FC<TableComponentProps> = ({
  tableHeaders,
  tableData,
}) => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 w-[744px] h-[344px] items-center">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg border-slate-300 border-x border-solid">
                <table className="min-w-full divide-y divide-gray-300 px-3 table-auto">
                  <thead className="bg-gray-50">
                    <tr className="w-[744px] ms-4">
                      {tableHeaders.map((header) => {
                        return (
                          <th
                            scope="col"
                            className="h-[40px] w-fit text-base font-medium "
                          >
                            <button
                              className="group inline-flex text-slate-500 text-base text-nowrap"
                              onClick={() => {
                                console.log("sort has been clicked");
                              }}
                            >
                              {header.title}
                              <span
                                className={cx(
                                  "ml-2 flex-none rounded bg-gray-100  group-hover:bg-gray-200 self-start",
                                  header.sortable ? "" : "invisible"
                                )}
                              >
                                <ChevronUpDownIcon
                                  className="h-4 w-4 mt-1"
                                  aria-hidden="true"
                                />
                              </span>
                            </button>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {tableData.slice(0, 5).map((row) => (
                      <tr key={row.id} className="w-[744px]">
                        <td className="h-[40px] text-base text-slate-900 text-center pl-4">
                          {row.id}
                        </td>
                        <td className="h-[40px] text-base text-slate-900 text-center">
                          {row.name}
                        </td>
                        <td className="h-[40px] text-base text-slate-900 text-center">
                          {row.industry}
                        </td>
                        <td className="h-[40px] text-base text-slate-900 text-center truncate text-ellipsis">
                          {row.city}
                        </td>
                        <td className="h-[40px] text-base text-slate-900 text-center">
                          {row.state}
                        </td>
                        <td className="h-[40px] text-base text-slate-900 text-center truncate text-ellipsis">
                          {row.segment}
                        </td>
                        <td className="h-[40px] text-base text-slate-900 text-center">
                          {row.ownerId}
                        </td>
                      </tr>
                    ))}
                    {tableData.length > 5 ? (
                      <tr className="h-[40px] bg-slate-50">
                        <td className="text-slate-900 pl-4" colSpan={7}>
                          <span className="flex justify-between">
                            <p className="text-base font-semibold text-slate-600 inline">
                              <InformationCircleIcon
                                className="h-8 w-8 inline pr-[6px]"
                                strokeWidth={"2"}
                              />
                              Only X rows are shown. View full list for more
                            </p>
                            <button
                              className="pr-3 text-slate-300"
                              onClick={() => {
                                console.log("Dismiss Clicked!");
                              }}
                            >
                              X
                            </button>
                          </span>
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
                <div className="h-[64px] bg-white">
                  <div className=" flex gap-4 border-t border-solid border-slate-300 p-3">
                    <button
                      type="button"
                      onClick={() => {
                        console.log("Show Full List Clicked!");
                      }}
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                    >
                      Show Full List
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        console.log("Show Query Clicked!");
                      }}
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                    >
                      Show Query
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        console.log("Show Chart Clicked!");
                      }}
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                    >
                      Show Chart
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        console.log("Pin to Dashboard Clicked!");
                      }}
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                    >
                      Pin to Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
