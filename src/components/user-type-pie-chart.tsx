// import React from "react";
// import { PieChartLabel } from "./charts";

// const userTypeData = [
//   { userType: "Budget Travelers", number: 2275, fill: "var(--color-france)" },
//   { userType: "Affluent", number: 2000, fill: "var(--color-germany)" },
//   { userType: "Adventure Seekers", number: 1872, fill: "var(--color-greece)" },
//   {
//     userType: "Cultural Enthusiasts",
//     number: 1731,
//     fill: "var(--color-mexico)",
//   },
//   { userType: "Frequent Travelers", number: 1200, fill: "var(--color-italy)" },
// ];

// export default function UserTypePieChart() {
//   return (
//     <div>
//       {/* <PieChartLabel chartData={userTypeData} /> */}
//       <p>Hllo from hart</p>
//     </div>
//   );
// }

import React from "react";
import { PieChartLabel } from "./charts";
import { ChartConfig } from "./ui/chart";

interface UserTypeData {
  userType: string;
  number: number;
  fill: string;
}

const userTypeData: UserTypeData[] = [
  { userType: "Budget Travelers", number: 2275, fill: "var(--color-france)" },
  { userType: "Affluent", number: 2000, fill: "var(--color-affluent)" },
  { userType: "Adventure Seekers", number: 1872, fill: "var(--color-greece)" },
  {
    userType: "Cultural Enthusiasts",
    number: 1731,
    fill: "var(--color-mexico)",
  },
  { userType: "Frequent Travelers", number: 1200, fill: "var(--color-italy)" },
];

const chartConfig: ChartConfig = {
  number: {
    label: "Number of Users",
  },
  "Budget Travelers": {
    label: "Budget Travelers",
    color: "hsl(var(--chart-1))",
  },
  Affluent: {
    label: "Affluent",
    color: "hsl(var(--chart-2))",
  },
  "Adventure Seekers": {
    label: "Adventure Seekers",
    color: "hsl(var(--chart-3))",
  },
  "Cultural Enthusiasts": {
    label: "Cultural Enthusiasts",
    color: "hsl(var(--chart-4))",
  },
  "Frequent Travelers": {
    label: "Frequent Travelers",
    color: "hsl(var(--chart-5))",
  },
};

export default function UserTypePieChart() {
  return (
    <PieChartLabel
      chartData={userTypeData}
      chartConfig={chartConfig}
      dataKey="number"
      nameKey="userType"
      title="Types of Travelers"
      description="April - September 2024"
    />
  );
}
