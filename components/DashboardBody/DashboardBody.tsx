import { Button, HelperButtons } from "../Button/Button";
import { Card } from "../Card/Card";
import { OwlIcon } from "../Icons/OwlIcon";
import { Notice } from "../Notice/Notice";
import { tableData, tableHeaders } from "../Page/data";
import { PageLayoutBody } from "../PageLayout/PageLayout";
import { TableComponent } from "../TableComponent/TableComponent";
import { TablePrompt } from "../TablePrompt/TablePrompt";

export type DashboardBodyProps = {};

const fetchTableData = () => {
  return tableData;
};

export const DashboardBody: React.FC<DashboardBodyProps> = ({}) => {
  const onShowFullListClicked = () => {
    console.log("Show Full List clicked");
  };
  const onShowQueryClicked = () => {
    console.log("Show Query clicked");
  };
  const onShowChartClicked = () => {
    console.log("Show Chart clicked");
  };
  const onPinToDashboardClicked = () => {
    console.log("Pin to Dashboard clicked");
  };
  const tableData = fetchTableData();
  return (
    <PageLayoutBody>
      <HelperButtons />
      <TablePrompt
        icon={<OwlIcon />}
        text={
          "To find out how many accounts you have, you can use the following query:"
        }
      />
      <Card classes="ml-[54px]">
        <TableComponent tableData={tableData} />
        {tableData.length > 5 ? (
          <Notice noticeText="Only X rows are shown. View full list for more" />
        ) : null}

        <div className="flex gap-4 p-3 bg-white rounded-md">
          <Button clickHandler={onShowFullListClicked}>Show Full List</Button>
          <Button clickHandler={onShowQueryClicked}>Show Query</Button>
          <Button clickHandler={onShowChartClicked}>Show Chart</Button>
          <Button clickHandler={onPinToDashboardClicked}>
            Pin to Dashboard
          </Button>
        </div>
      </Card>
    </PageLayoutBody>
  );
};
