import { Button } from "@/components/ui/button";
import { BookUp } from "lucide-react";
import React from "react";

export const ExportInventory = () => {
  return (
    <Button variant={'outline'} className="text-brand-primary font-extrabold rounded-full">
      <BookUp />
      Export inventory
    </Button>
  );
};
