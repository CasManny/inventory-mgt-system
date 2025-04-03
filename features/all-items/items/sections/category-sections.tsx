"use client";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CategoryColumns } from "../../categories/components/category-columns";
import { CategoryDataTable } from "../../categories/components/category-data-table";

export const CategorySections = () => {
  return (
    <Suspense fallback={"loading"}>
      <ErrorBoundary fallback={"error"}>
        <CategorySectionsSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategorySectionsSuspense = () => {
  const [data] = trpc.categories.getAllCategoriesWithItems.useSuspenseQuery();
  return (
    <div className="">
      <CategoryDataTable columns={CategoryColumns} data={data} />
    </div>
  );
};
