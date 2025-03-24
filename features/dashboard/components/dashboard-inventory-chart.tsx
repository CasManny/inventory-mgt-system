"use client";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { inventory: "Laptops", quantity: 60 },
  { inventory: "Keyboards", quantity: 35 },
  { inventory: "Monitors", quantity: 15 },
  { inventory: "Mouse", quantity: 50 },
  { inventory: "Printers", quantity: 10 },
];

const chartConfig = {
  quantity: {
    label: "inventory",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export const DashboardInventoryChart = () => {
  return (
    <Card className="p-4">
      <CardContent>
        <div className="">
          <h2>Inventory by category</h2>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={data}>
              <XAxis
                dataKey="inventory"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis dataKey={"quantity"} />
              <Bar dataKey="quantity" fill="#60a5fa" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};
