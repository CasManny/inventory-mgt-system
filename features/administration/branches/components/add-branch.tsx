import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export const AddBranch = () => {
  return (
    <Button className="flex items-center rounded-full bg-brand-primary hover:bg-brand-primary cursor-pointer">
      <Plus />
      <span>Add Branch</span>
    </Button>
  );
};
