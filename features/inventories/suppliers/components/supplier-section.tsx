"use client";
import React, { Suspense } from "react";
import { SuppliersDataTable } from "./suppliers-data-table";
import { supplierColumns } from "./supplier-columns";
import { ErrorBoundary } from "react-error-boundary";
import { trpc } from "@/trpc/client";

export const SupplierSection = () => {
  return (
    <Suspense fallback="loading">
      <ErrorBoundary fallback="error">
        <SupplierSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

const SupplierSectionSuspense = () => {
  const [suppliersdata] = trpc.suppliers.getAllSuppliers.useSuspenseQuery();
  return (
    <div className="">
      <SuppliersDataTable columns={supplierColumns} data={suppliersdata} />;
    </div>
  );
};
