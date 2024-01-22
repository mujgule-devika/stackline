import React from "react";
import { DashboardContainer } from "./DashboardStyles";
import Product from "../Product/Product";

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Product />
    </DashboardContainer>
  );
};

export default Dashboard;
