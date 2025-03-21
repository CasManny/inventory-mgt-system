import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export const ExportSales = () => {
  return (
    <Button className="flex items-center rounded-md bg-brand-primary hover:bg-brand-primary cursor-pointer">
      <Plus />
      <span>Export sales</span>
    </Button>
  );
};
