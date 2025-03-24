import { Card } from "@/components/ui/card";
import { Box, ChartColumn, Download, RotateCcw } from "lucide-react";
import Link from "next/link";
import React from "react";

const quickActions = [
  {
    label: "Add Item",
    icon: Box,
    href: "/dashboard/items/create",
  },
  {
    label: "Restock",
    icon: RotateCcw,
    href: "/dashboard/items/create",
  },
  {
    label: "Reports",
    icon: ChartColumn,
    href: "/dashboard/",
  },
  {
    label: "Export",
    icon: Download,
    href: "/dashboard/exports",
  },
];

export const DashboardQuickActions = () => {
  return (
    <Card className="p-5">
      <h1 className="font-bold">Quick Actions</h1>
      <div className="grid grid-cols-2 gap-5">
        {quickActions.map(({ icon: Icon, href, label }) => (
          <Link
            href={href}
            key={href}
            className="flex flex-col items-center border p-5 rounded-sm"
          >
            <Icon />
            <p>{label}</p>
          </Link>
        ))}
      </div>
    </Card>
  );
};
