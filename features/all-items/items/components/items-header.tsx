import React from "react";
import { AddItem } from "./add-item";
import { ExportInventory } from "./export-inventory";

export const ItemsHeader = () => {
  return (
    <div className="flex justify-between items-center p-3.5 border-b">
      <h1 className="text-2xl font-semibold">Items</h1>
      <div className="space-x-3 flex">
        <ExportInventory />
        <AddItem />
      </div>
    </div>
  );
};
