import React from "react";
import { RevenueCard, OverviewCard } from "@/components/dashboard";
import { PersonIcon } from "@radix-ui/react-icons";
import {
  MostVisitedCountriesChart,
  RevenueVsExpensesChart,
} from "@/components/charts/specific";

export default function HomePage() {
  return (
    <div className="h-full flex flex-col gap-y-10">
      <div className="flex gap-x-4 items-center justify-center w-full flex-wrap gap-y-5">
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

      <div className="flex flex-col lg:flex-row flex-wrap gap-y-8 justify-evenly">
        <RevenueCard />

        <MostVisitedCountriesChart />

        <RevenueVsExpensesChart />
      </div>
      <div></div>
    </div>
  );
}
