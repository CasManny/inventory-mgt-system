import { supplierColumns } from "@/features/inventories/suppliers/components/supplier-columns";
import { SuppliersDataTable } from "@/features/inventories/suppliers/components/suppliers-data-table";
import { SuppliersHeader } from "@/features/inventories/suppliers/components/suppliers-header";
import React from "react";

const SuppliersHomepage = () => {
  return (
    <section className="">
      <SuppliersHeader />
      <SuppliersDataTable columns={supplierColumns} data={[]} />
    </section>
  );
};

export default SuppliersHomepage;
