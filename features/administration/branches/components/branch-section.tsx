"use client"
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BranchDataTable } from "./branch-data-table";
import { branchColumns } from "./branch-columns";
import { trpc } from "@/trpc/client";

export const BranchSection = () => {
  return (
    <Suspense fallback="loading">
      <ErrorBoundary fallback="error">
        <BranchSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

const BranchSectionSuspense = () => {
  const [branchesData] = trpc.branches.getAllBranches.useSuspenseQuery();
  return <BranchDataTable columns={branchColumns} data={branchesData} />;
};
