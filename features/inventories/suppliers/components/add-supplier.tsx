import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

export const AddSupplier = () => {
  return (
    <Link
      href={"/dashboard/suppliers/add-supplier"}
      className={cn(
        buttonVariants({}),
        "flex items-center rounded font-semibold bg-brand-primary hover:bg-brand-primary cursor-pointer"
      )}
    >
      <Plus />
      <span>Add supplier</span>
    </Link>
  );
};
