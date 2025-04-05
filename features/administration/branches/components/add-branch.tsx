import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export const AddBranch = () => {
  return (
    <Link
      href={"/dashboard/branches/add-branch"}
      className={cn(
        buttonVariants(),
        "flex items-center rounded-full bg-brand-primary hover:bg-brand-primary cursor-pointer"
      )}
    >
      <Plus />
      <span>Add Branch</span>
    </Link>
  );
};
