import React from "react";
import {
  OverviewCard,
  RevenueCard,
  MostVisitedCountriesChart,
  RevenueVsExpensesChart,
} from "@/components";
import { PersonIcon } from "@radix-ui/react-icons";

import { PieChartLabel } from "@/components/charts/pie-chart-label";

export default function HomePage() {
  return (
    <div className="h-full flex flex-col gap-y-10">
      <div className="flex gap-x-2 items-center">
        <OverviewCard
          title="Total Users"
          icon={<PersonIcon color="#0077B6" />}
          value="500"
        />
        <OverviewCard
          title="Active Users"
          icon={<PersonIcon color="#0077B6" />}
          value="400"
        />
        <OverviewCard
          title="Total Wishlists Created"
          icon={<PersonIcon color="#0077B6" />}
          value="500"
        />
        <OverviewCard
          title="Average Session Duration"
          icon={<PersonIcon color="#0077B6" />}
          value="10 min 2 secs"
        />
      </div>

      <div className="flex justify-between">
        <RevenueCard />

        <MostVisitedCountriesChart />
      </div>
      <div>
        <RevenueVsExpensesChart />
      </div>
    </div>
  );
}
