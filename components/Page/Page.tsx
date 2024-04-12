import React from "react";
import { DashboardBody } from "../DashboardBody/DashboardBody";
import { DashboardFooter } from "../DashboardFooter/DashboardFooter";
import { DashboardHeader } from "../DashboardHeader/DashboardHeader";

export type PageProps = {};

export const Dashboard: React.FC<PageProps> = ({}) => {
  // TODO: fix width and padding
  return (
    <div>
      <DashboardHeader />
      <DashboardBody />
      <DashboardFooter />
    </div>
  );
};
