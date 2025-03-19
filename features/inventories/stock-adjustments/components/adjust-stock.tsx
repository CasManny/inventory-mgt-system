import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export const AdjustStock = () => {
  return (
    <Button className="flex items-center rounded-full bg-brand-primary hover:bg-brand-primary cursor-pointer">
      <Plus />
      <span>Adjust stock</span>
    </Button>
  );
};
