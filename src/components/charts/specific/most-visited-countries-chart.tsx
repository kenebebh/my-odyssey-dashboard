import React from "react";
import { PieChartLabel } from "../generic";
import { ChartConfig } from "../../ui/chart";

type ChartData<T> = {
  [K in keyof T]: T[K];
}[];

interface CountryData {
  country: string;
  visitors: number;
  fill: string;
}

export const countriesData: ChartData<CountryData> = [
  { country: "france", visitors: 2275, fill: "var(--color-france)" },
  { country: "germany", visitors: 2000, fill: "var(--color-germany)" },
  { country: "greece", visitors: 1872, fill: "var(--color-greece)" },
  { country: "mexico", visitors: 1731, fill: "var(--color-mexico)" },
  { country: "italy", visitors: 1200, fill: "var(--color-italy)" },
];

const chartConfig: ChartConfig = {
  visitors: {
    label: "Number of Visitors",
  },
  france: {
    label: "France",
    color: "hsl(var(--chart-1))",
  },
  germany: {
    label: "Germany",
    color: "hsl(var(--chart-2))",
  },
  greece: {
    label: "Greece",
    color: "hsl(var(--chart-3))",
  },
  mexico: {
    label: "Mexico",
    color: "hsl(var(--chart-4))",
  },
  italy: {
    label: "Italy",
    color: "hsl(var(--chart-5))",
  },
};

export default function MostVisitedCountriesChart() {
  return (
    <PieChartLabel
      chartData={countriesData}
      chartConfig={chartConfig}
      dataKey="visitors"
      nameKey="country"
      title="Most Visited Countries"
      description="April - September 2024"
    />
  );
}
