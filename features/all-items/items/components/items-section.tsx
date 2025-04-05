"use client";
import React, { Suspense } from "react";
import { ItemsDataTable } from "./items-data-table";
import { ItemsColumns } from "./items-columns";
import { ErrorBoundary } from "react-error-boundary";
import { trpc } from "@/trpc/client";

export const ItemsSection = () => {
  return (
    <Suspense fallback="loading">
      <ErrorBoundary fallback="error">
        <ItemsSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

const ItemsSectionSuspense = () => {
  const [data] = trpc.items.getAllItems.useSuspenseQuery();
  const modifiedData = data.map((item) => ({
    ...item,
    isLow: Boolean(item.isLow),
  }));
  return <ItemsDataTable columns={ItemsColumns} data={modifiedData} />;
};
