import { stockAdjustmentColumns } from "@/features/inventories/stock-adjustments/components/stock-adjustment-columns";
import { StockAdjustmentsDataTable } from "@/features/inventories/stock-adjustments/components/stock-adjustment-data-table";
import { StockAdjustmentHeader } from "@/features/inventories/stock-adjustments/components/stock-adjustment-header";
import React from "react";

const StockAdjustmentHomepage = () => {
  return (
    <section className="">
      <StockAdjustmentHeader />
      <StockAdjustmentsDataTable columns={stockAdjustmentColumns} data={[]} />
    </section>
  );
};

export default StockAdjustmentHomepage;
