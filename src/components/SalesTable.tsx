import React from "react";
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

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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
              <TableCell>
                {currencyFormatter.format(item.retailSales)}
              </TableCell>
              <TableCell>
                {currencyFormatter.format(item.wholesaleSales)}
              </TableCell>
              <TableCell>{item.unitsSold}</TableCell>
              <TableCell>
                {currencyFormatter.format(item.retailerMargin)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default SalesTable;
