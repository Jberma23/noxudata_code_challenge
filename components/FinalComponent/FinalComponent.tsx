import { DashboardHeader } from "../DashboardHeader/DashboardHeader";
import { FooterBox } from "../FooterBox/FooterBox";
import { TableBox } from "../TableBox/TableBox";

export type FinalComponentProps = {};

export const FinalComponent: React.FC<FinalComponentProps> = ({}) => {
  return (
    <>
      <DashboardHeader />
      <TableBox />
      <FooterBox />
    </>
  );
};
