"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
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
} satisfies ChartConfig;

export function PieChartLabel({ chartData }: { chartData: {}[] }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Most Visited Countries</CardTitle>
        <CardDescription>April - September 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="country"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        {/* <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="leading-none text-muted-foreground">
          Showing the most visited countries for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
