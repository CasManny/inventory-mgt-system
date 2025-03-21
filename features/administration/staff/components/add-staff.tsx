import { Button } from "@/components/ui/button";
import { useAddStaffModalStore } from "@/store/add-staff-store-modal";
import { Plus } from "lucide-react";


export const AddStaff = () => {
  const { setOpenAddStaffModal } = useAddStaffModalStore()
  return (
    <Button
      onClick={() => setOpenAddStaffModal(true)}
      className={
        "flex items-center text-white rounded-md bg-brand-primary hover:bg-brand-primary cursor-pointer"
      }
    >
      <Plus />
      <span>Add staff</span>
    </Button>
  );
};
