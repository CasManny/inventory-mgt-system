import { Info } from "lucide-react";

interface ItemTypeProps {
  label: string;
  state: "standard" | "variable";
  isSelected: boolean;
  onClick: () => void;
}

export const ItemType = ({
  label,
  state,
  isSelected,
  onClick,
}: ItemTypeProps) => {
  return (
    <div
      className={`border-2 p-5 flex justify-between rounded-md group items-center cursor-pointer 
      ${isSelected ? "border-blue-500" : "border-gray-300"}`}
      onClick={onClick}
    >
      <div className="flex gap-2 items-center">
        <div
          className={`size-5 border-2 rounded-full flex items-center justify-center 
          ${isSelected ? "border-blue-500" : "border-gray-300"}`}
        >
          {isSelected && <div className="size-2 bg-blue-500 rounded-full" />}
        </div>
        <p>{label}</p>
      </div>
      <Info className="size-4" />
    </div>
  );
};
