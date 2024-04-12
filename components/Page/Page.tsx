import React from "react";
import { DashboardBody } from "../DashboardBody/DashboardBody";
import { DashboardFooter } from "../DashboardFooter/DashboardFooter";
import { DashboardHeader } from "../DashboardHeader/DashboardHeader";

export type PageProps = {};

export const Dashboard: React.FC<PageProps> = ({}) => {
  return (
    <div className="w-[68.75rem]">
      <DashboardHeader />
      <DashboardBody />
      <DashboardFooter />
    </div>
  );
};
