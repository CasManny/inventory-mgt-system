import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export const AddSale = () => {
  return (
    <Link
      href={"/dashboard/sales/add-sale"}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "flex items-center rounded-md  cursor-pointer"
      )}
    >
      <Plus />
      <span>Add sale</span>
    </Link>
  );
};
