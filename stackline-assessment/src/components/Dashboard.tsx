import React, { useEffect } from "react";
import { DashboardContainer } from "./DashboardStyles";
import Product from "./Product";
import { fetchData } from "../state/products/productSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import styled from "styled-components";

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  // const loading = useAppSelector((state) => state.products.status);
  console.log("inside dashboard");

  useEffect(() => {
    dispatch(fetchData());
    console.log("useeffect");
  }, [dispatch]);

  return (
    <DashboardContainer>
      <Product />
    </DashboardContainer>
  );
};

export default Dashboard;
