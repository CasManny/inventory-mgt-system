import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

export const AddStaff = () => {
  return (
    <Link
      href={"/dashboard/staff/invite-new-member"}
      className={cn(
        buttonVariants({}),
        "flex items-center text-white rounded-md bg-brand-primary hover:bg-brand-primary cursor-pointer"
      )}
    >
      <Plus />
      <span>Add staff</span>
    </Link>
  );
};
