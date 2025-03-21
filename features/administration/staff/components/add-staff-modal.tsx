"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer";
import { useAddStaffModalStore } from "@/store/add-staff-store-modal";
import { AddStaffForm } from "./add-staff-form";

export const AddStaffModal = () => {
  const { openAddStaffModal, setOpenAddStaffModal } = useAddStaffModalStore();
  return (
    <Drawer open={openAddStaffModal} onOpenChange={setOpenAddStaffModal}>
      <DrawerContent className="fixed inset-0 h-screen w-screen z-50">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        <AddStaffForm />
      </DrawerContent>
    </Drawer>
  );
};
