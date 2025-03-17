import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CreateCategoryModalProps {
  open: boolean;
  setOPen: (open: boolean) => void;
}

export const CreateCategoryModal = ({
  open,
  setOPen,
}: CreateCategoryModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOPen}>
      <DialogContent className="p-10">
        <div className="space-y-2">
          <Input className="" placeholder="E.g Drinks" />
          <Button className="w-full bg-brand-primary hover:bg-brand-primary cursor-pointer">
            Create Category
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
