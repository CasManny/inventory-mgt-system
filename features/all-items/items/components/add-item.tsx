import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export const AddItem = () => {
  return (
    <Link
      href={"/dashboard/items/create"}
      className={cn(
        buttonVariants({}),
        "flex items-center rounded-md bg-brand-primary hover:bg-brand-primary cursor-pointer"
      )}
    >
      <Plus />
      <span>Add item</span>
    </Link>
  );
};
