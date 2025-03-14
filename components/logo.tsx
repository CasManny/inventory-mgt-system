import { cn } from "@/lib/utils";

interface InventoryLogoProps {
  className?: string;
}
export const InventoryLogo = ({ className }: InventoryLogoProps) => {
  return (
    <h1 className={cn("text-brand-primary text-2xl font-bold", className)}>
      INventory
    </h1>
  );
};
