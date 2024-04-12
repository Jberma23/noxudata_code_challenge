import { textClamp } from "../../helpers/textClamp";
import { tableHeaders } from "../Page/data";
import {
  SortableTableHeader,
  Table,
  TableBody,
  TableBodyRow,
  TableHeader,
  TableHeaderRow,
} from "../Table/Table";

export type TableComponentProps = {
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

export const TableComponent: React.FC<TableComponentProps> = ({
  tableData,
}) => {
  const sortClickHandler = () => {
    console.log("click");
  };

  return (
    <>
      <Table>
        <thead>
          <TableHeaderRow>
            {tableHeaders.map((header, idx) => {
              return !header.sortable ? (
                <TableHeader key={"table header " + idx}>
                  {header.title}
                </TableHeader>
              ) : (
                <SortableTableHeader
                  key={"table header " + idx}
                  clickHandler={() => sortClickHandler()}
                >
                  {header.title}
                </SortableTableHeader>
              );
            })}
          </TableHeaderRow>
        </thead>
        <TableBody>
          {tableData.slice(0, 5).map((row, idx) => (
            <TableBodyRow key={"table row " + idx}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.industry}</td>
              <td>{textClamp(row.city, 4)}</td>
              <td>{row.state}</td>
              <td>{textClamp(row.segment, 4)}</td>
              <td>{row.ownerId}</td>
            </TableBodyRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
