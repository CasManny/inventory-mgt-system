import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

export const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="">
        <div className="border px-1 flex items-center rounded">
          <Search className="size-5" />
          <Input
            placeholder="search..."
            className="outline-none border-none focus-visible:outline-none focus-visible:ring-0"
          />
        </div>
      </div>
    </div>
  );
};
