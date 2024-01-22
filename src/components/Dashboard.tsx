import React, { useEffect } from "react";
import { ChartsDiv, DashboardContainer } from "./DashboardStyles";
import Product from "./Product";
import { fetchData } from "../state/products/productSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { SalesChart } from "./SalesChart";
import { SalesTable } from "./SalesTable";

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  // const loading = useAppSelector((state) => state.products.status);

 

  useEffect(() => {
    dispatch(fetchData());
    console.log("useeffect");
  }, [dispatch]);

  return (
    <DashboardContainer>
      <Product />
      <ChartsDiv>
        <SalesChart />
        <SalesTable />
      </ChartsDiv>
    </DashboardContainer>
  );
};

export default Dashboard;
