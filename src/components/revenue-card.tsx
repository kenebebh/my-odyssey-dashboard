import React from "react";
import RevenueBarChart from "./charts/specific/revenue-bar-chart";

export default function RevenueCard() {
  return (
    <div className="w-[32rem] border rounded-sm">
      <RevenueBarChart />
    </div>
  );
}
