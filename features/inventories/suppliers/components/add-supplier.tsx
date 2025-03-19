import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export const AddSupplier = () => {
  return (
    <Button className="flex items-center rounded font-semibold bg-brand-primary hover:bg-brand-primary cursor-pointer">
      <Plus />
      <span>Add supplier</span>
    </Button>
  );
};
