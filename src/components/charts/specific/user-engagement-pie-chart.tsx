import React from "react";
import { PieChartLabel } from "../generic";
import { ChartConfig } from "@/components/ui/chart";

interface UserEngagementData {
  userType: string;
  number: number;
  fill: string;
}

const userEngagementData: UserEngagementData[] = [
  {
    userType: "Active Users",
    number: 2275,
    fill: "#fb923c",
  },
  { userType: "Moderately Engaged", number: 2000, fill: "#4430fc" },
  { userType: "Inactive Users", number: 1072, fill: "#5ffa74" },
];

const chartConfig: ChartConfig = {
  number: {
    label: "Number of Users",
  },
  "Active Users": {
    label: "Active Users",
    color: "hsl(var(--chart-1))",
  },
  "Moderately Engaged": {
    label: "Moderately Engaged",
    color: "hsl(var(--chart-2))",
  },
  "Inactive Users": {
    label: "Inactive Users",
    color: "hsl(var(--chart-3))",
  },
};

export default function UserEngagementPieChart() {
  return (
    <div className="w-[30rem]">
      <PieChartLabel
        chartData={userEngagementData}
        chartConfig={chartConfig}
        dataKey="number"
        nameKey="userType"
        title="Engagement Level of Users"
        description="January - September 2024"
      />
    </div>
  );
}
