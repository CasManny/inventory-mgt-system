import { registerColumns } from "@/features/administration/registers/components/registers-columns";
import { RegistersDataTable } from "@/features/administration/registers/components/registers-data-table";
import { RegistersHeader } from "@/features/administration/registers/components/registers-header";
import React from "react";

export const registers = [
  {
    id: "1a2b3c",
    name: "1a2b3c",
    branch: "Lagos",
    Terminal: 101,
  },
  {
    id: "4d5e6f",
    name: "4d5e6f",
    branch: "Abuja",
    Terminal: 202,
  },
  {
    id: "7g8h9i",
    name: "7g8h9i",
    branch: "Port Harcourt",
    Terminal: 303,
  },
  {
    id: "0j1k2l",
    name: "0j1k2l",
    branch: "Kano",
    Terminal: 404,
  },
  {
    id: "3m4n5o",
    name: "3m4n5o",
    branch: "Ibadan",
    Terminal: 505,
  },
];

const RegistersHomepage = () => {
  return (
    <section className="">
      <RegistersHeader />
      <RegistersDataTable columns={registerColumns} data={registers} />
    </section>
  );
};

export default RegistersHomepage;
