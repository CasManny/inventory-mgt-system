"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AddStaffForm } from "./add-staff-form";

interface AddStaffModalProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const AddStaffModal = ({ open, setOpen }: AddStaffModalProps) => {
  return (
    <Drawer open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DrawerContent className="fixed inset-0 h-screen w-screen z-50">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        <AddStaffForm />
      </DrawerContent>
    </Drawer>
  );
};
