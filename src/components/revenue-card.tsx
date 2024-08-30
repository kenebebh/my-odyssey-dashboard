import React from "react";
import RevenueBarChart from "./revenue-bar-chart";

export default function RevenueCard() {
  return (
    <div className="w-[28rem] border rounded-sm">
      <div>
        {/* <h1>Total Revenue</h1>
        <p>$50,000</p> */}
        <RevenueBarChart />
      </div>
    </div>
  );
}
