import React from "react";
import { BarChartMultiple } from "./charts";

const revenueIncomeData = [
  { month: "January", revenue: 305, expenses: 80 },
  { month: "February", revenue: 550, expenses: 200 },
  { month: "March", revenue: 600, expenses: 120 },
  { month: "April", revenue: 730, expenses: 190 },
  { month: "May", revenue: 450, expenses: 130 },
  { month: "June", revenue: 700, expenses: 140 },
  { month: "July", revenue: 1300, expenses: 140 },
  { month: "August", revenue: 1400, expenses: 140 },
  { month: "September", revenue: 1135, expenses: 140 },
  { month: "October", revenue: 1550, expenses: 140 },
];

export default function RevenueVsExpensesChart() {
  return (
    <div className="w-[32rem]">
      <BarChartMultiple chartData={revenueIncomeData} />
    </div>
  );
}
