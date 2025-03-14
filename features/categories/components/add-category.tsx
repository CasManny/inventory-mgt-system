import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

interface AddCategoryProps {
  onClick: (open: boolean) => void;
}

export const AddCategory = ({ onClick }: AddCategoryProps) => {
  return (
    <Button
      onClick={() => onClick(true)}
      className="flex justify-between bg-brand-primary hover:bg-brand-primary text-white rounded-full cursor-pointer"
    >
      <Plus />
      <span>Add Category</span>
    </Button>
  );
};
