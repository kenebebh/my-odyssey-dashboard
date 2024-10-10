import React from "react";
// import { UserEngagementPieChart, UserTypePieChart } from "@/components";
import {
  UserEngagementPieChart,
  UserTypePieChart,
} from "@/components/charts/specific";

export default function UserCharts() {
  return (
    <div className="pt-4 pl-2 flex justify-evenly flex-wrap gap-x-4 gap-y-5 pr-4">
      <UserTypePieChart />

      <UserEngagementPieChart />
    </div>
  );
}
