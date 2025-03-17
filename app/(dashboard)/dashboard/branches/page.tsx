import { branchColumns } from "@/features/administration/branches/components/branch-columns";
import { BranchDataTable } from "@/features/administration/branches/components/branch-data-table";
import { BranchHeader } from "@/features/administration/branches/components/branch-header";
import React from "react";

export const branchesData = [
  {
    id: "1",
    name: "Main Branch",
    address: "123 Market Street, Lagos",
    numberOfStaff: 25,
    numberOfRegisters: 10,
  },
  {
    id: "2",
    name: "Ikeja Branch",
    address: "45 Allen Avenue, Ikeja",
    numberOfStaff: 18,
    numberOfRegisters: 6,
  },
  {
    id: "3",
    name: "Yaba Branch",
    address: "78 Herbert Macaulay Way, Yaba",
    numberOfStaff: 12,
    numberOfRegisters: 4,
  },
  {
    id: "4",
    name: "Lekki Branch",
    address: "22 Admiralty Way, Lekki Phase 1",
    numberOfStaff: 30,
    numberOfRegisters: 12,
  },
  {
    id: "5",
    name: "Abuja Branch",
    address: "10 Maitama Crescent, Abuja",
    numberOfStaff: 20,
    numberOfRegisters: 8,
  },
];

const BranchesHomepage = () => {
  return (
    <section className="">
      <BranchHeader />
      <BranchDataTable columns={branchColumns} data={branchesData} />
    </section>
  );
};

export default BranchesHomepage;
