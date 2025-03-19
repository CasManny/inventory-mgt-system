import React from "react";
import { AdjustStock } from "./adjust-stock";

export const StockAdjustmentHeader = () => {
  return (
    <div className="flex justify-between items-center p-3.5 border-b">
      <h1 className="text-2xl font-semibold">Stock Adjustment</h1>
      <div className="space-x-3 flex">
        <AdjustStock />
      </div>
    </div>
  );
};
