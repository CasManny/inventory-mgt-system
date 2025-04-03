import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface CreateCategoryModalProps {
  open: boolean;
  setOPen: (open: boolean) => void;
}

export const CreateCategoryModal = ({
  open,
  setOPen,
}: CreateCategoryModalProps) => {
  const [name, setName] = useState("");
  const utils = trpc.useUtils()
  const createCategory = trpc.categories.createCategory.useMutation({
    onSuccess: () => {
      // invalidate all categories page
      toast.success("category created!");
      utils.categories.getAllCategoriesWithItems.invalidate()
      setOPen(false);
      setName("");
    },
    onError: (error) => {
      toast.error(error.message);
      setName("")
    },
  });

  const handleSubmit = () => {
    if (name.trim() === "") return;
    createCategory.mutate({ name });
  };
  return (
    <Dialog open={open} onOpenChange={setOPen}>
      <DialogContent className="p-10">
        <div className="space-y-2">
          <Input
            className=""
            placeholder="E.g Drinks"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            disabled={createCategory.isPending}
            onClick={handleSubmit}
            className="w-full bg-brand-primary hover:bg-brand-primary cursor-pointer"
          >
            {createCategory.isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Create Category"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
