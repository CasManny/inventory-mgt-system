import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

interface AddStaffProps {
  setOpenModal: (value: boolean) => void;
}

export const AddStaff = ({ setOpenModal }: AddStaffProps) => {
  return (
    <Button
      onClick={() => setOpenModal(true)}
      className={
        "flex items-center text-white rounded-md bg-brand-primary hover:bg-brand-primary cursor-pointer"
      }
    >
      <Plus />
      <span>Add staff</span>
    </Button>
  );
};
