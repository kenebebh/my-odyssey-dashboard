import React from "react";
import { BarChartLabel } from "./charts";

const revenueData = [
  { month: "January", income: 1235 },
  { month: "February", income: 1720 },
  { month: "March", income: 1200 },
  { month: "April", income: 1800 },
  { month: "May", income: 1300 },
  { month: "June", income: 1720 },
  { month: "July", income: 1450 },
  { month: "August", income: 1500 },
  { month: "September", income: 1135 },
  { month: "October", income: 1650 },
];

export default function RevenueBarChart() {
  return (
    <div>
      {" "}
      <BarChartLabel chartData={revenueData} />
    </div>
  );
}
