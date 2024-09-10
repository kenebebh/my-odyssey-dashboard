"use client";

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

type ChartData<T> = {
  [K in keyof T]: T[K];
}[];

interface PieChartLabelProps<T> {
  chartData: ChartData<T>;
  chartConfig: ChartConfig;
  dataKey: keyof T; // The key for the numeric data (e.g., 'visitors', 'number')
  nameKey: keyof T; // The key for the name data (e.g., 'country', 'userType')
  title: string; // The title for the chart
  description: string; // The description for the chart
}

export function PieChartLabel<T>({
  chartData,
  chartConfig,
  dataKey,
  nameKey,
  title,
  description,
}: PieChartLabelProps<T>) {
  // console.dir("ChartData:" + JSON.stringify(chartData));
  // console.dir("ChartConfig:" + JSON.stringify(chartConfig));

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[380px]"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent nameKey={dataKey as string} hideLabel />
              }
            />
            <Pie data={chartData} dataKey={dataKey as string}>
              <LabelList
                dataKey={nameKey as string}
                className="fill-background"
                stroke="none"
                fontSize={14}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing the <span className="lowercase">{title}</span> for the last 6
          months
        </div>
      </CardFooter>
    </Card>
  );
}
