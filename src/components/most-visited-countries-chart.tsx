import React from "react";
import { PieChartLabel } from "./charts";

const countriesData = [
  { country: "france", visitors: 2275, fill: "var(--color-france)" },
  { country: "germany", visitors: 2000, fill: "var(--color-germany)" },
  { country: "greece", visitors: 1872, fill: "var(--color-greece)" },
  { country: "mexico", visitors: 1731, fill: "var(--color-mexico)" },
  { country: "italy", visitors: 1200, fill: "var(--color-italy)" },
];

export default function MostVisitedCountriesChart() {
  return (
    <div>
      <PieChartLabel chartData={countriesData} />
    </div>
  );
}
