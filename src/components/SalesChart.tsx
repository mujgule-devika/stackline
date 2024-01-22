import React from "react";
import { Card } from "../resusableComponents/Card/Card";
import { useAppSelector } from "../hooks/hooks";
import { SalesChartTitle, ChartContainer } from "./SalesChartStyles";
import { selectProductData } from "../state/products/productSlice";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const SalesChart = () => {
  const salesData = useAppSelector(selectProductData);
  if (!salesData.length) return null;

  const sales: {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
  }[] = salesData[0].sales;

  // Process the data to group by months and sum up the retail sales and retailer margin
  const dataForChart: {
    month: string;
    retailSales: number;
    wholesaleSales: number;
  }[] = sales.reduce((acc, { weekEnding, retailSales, wholesaleSales }) => {
    const month = new Date(weekEnding).toLocaleString("en-US", {
      month: "short",
    });
    const existing = acc.find((data) => data.month === month);
    if (existing) {
      existing.retailSales += retailSales;
      existing.wholesaleSales += wholesaleSales;
    } else {
      acc.push({ month, retailSales, wholesaleSales });
    }
    return acc;
  }, [] as { month: string; retailSales: number; wholesaleSales: number }[]);

  // Custom sorting function to sort by month
  const sortedData = dataForChart.sort((a, b) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months.indexOf(a.month) - months.indexOf(b.month);
  });

  return (
    <Card>
      <SalesChartTitle>Retail Sales</SalesChartTitle>
      <ChartContainer>
        <ResponsiveContainer>
          <LineChart
            data={sortedData}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="month"
              tick={{ fill: "grey" }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis hide={true} />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="retailSales"
              name="Retail Sales"
              stroke="#45a7f6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="wholesaleSales"
              name="wholesale Sales"
              stroke="#a1abc3"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};
