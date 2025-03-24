import { Card } from "@/components/ui/card";
import { AlertTriangle, Box } from "lucide-react";
import React from "react";

export const DashboardAlerts = () => {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Card className="p-5">
          <div className="flex justify-between">
            <div className="">
              <h3 className="font-semibold">Total Items</h3>
              <div className="flex items-center gap-1">
                <p className="text-2xl font-bold">1,234</p>
                <span className="text-green-400">+12%</span>
              </div>
            </div>
            <div className="bg-blue-50 rounded-full size-10 flex-center">
              <Box className="size-5" />
            </div>
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex justify-between">
            <div className="">
              <h3 className="font-semibold">Low stock</h3>
              <div className="flex items-center gap-1">
                <p className="text-2xl font-bold">1,234</p>
                <span className="text-red-500">-5%</span>
              </div>
            </div>
            <div className="bg-amber-400 rounded-full size-10 flex-center">
              <AlertTriangle className="text-amber-100 size-5" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
