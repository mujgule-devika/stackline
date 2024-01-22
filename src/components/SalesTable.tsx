import React from "react";
import { Card } from "../resusableComponents/Card/Card";
import { useAppSelector } from "../hooks/hooks";
import { selectProductData } from "../state/products/productSlice";
import {
  StyledTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from "./SalesTableStyles";

export const SalesTable = () => {
  const salesData = useAppSelector(selectProductData);
  if (!salesData.length) return null;
  const salesTableData = salesData[0].sales;

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableHeader>WEEK ENDING</TableHeader>
            <TableHeader>RETAIL SALES</TableHeader>
            <TableHeader>WHOLESALE SALES</TableHeader>
            <TableHeader>UNITS SOLD</TableHeader>
            <TableHeader>RETAILER MARGIN</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {salesTableData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.weekEnding}</TableCell>
              <TableCell>{item.retailSales}</TableCell>
              <TableCell>{item.wholesaleSales}</TableCell>
              <TableCell>{item.unitsSold}</TableCell>
              <TableCell>{item.retailerMargin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default SalesTable;
