import { Staffcolumns } from "@/features/administration/staff/components/staff-columns";
import { StaffDataTable } from "@/features/administration/staff/components/staff-data-table";
import { StaffRoleHeader } from "@/features/administration/staff/components/staff-roles-header";
import React from "react";

const staffData = [
  {
    id: "1",
    staff: {
      name: "John Doe",
      imageUrl: "https://example.com/john.jpg",
    },
    email: "john.doe@example.com",
    role: "Manager",
    branch: "New York",
  },
  {
    id: "2",
    staff: {
      name: "Jane Smith",
      imageUrl: "https://example.com/jane.jpg",
    },
    email: "jane.smith@example.com",
    role: "Developer",
    branch: "Los Angeles",
  },
  {
    id: "3",
    staff: {
      name: "Alice Johnson",
    },
    email: "alice.johnson@example.com",
    role: "Designer",
    branch: "Chicago",
  },
  {
    id: "4",
    staff: {
      name: "Bob Lee",
      imageUrl: "https://example.com/bob.jpg",
    },
    email: "bob.lee@example.com",
    role: "HR",
    branch: "Miami",
  },
  {
    id: "5",
    staff: {
      name: "Charlie Brown",
      imageUrl: "https://example.com/charlie.jpg",
    },
    email: "charlie.brown@example.com",
    role: "Developer",
    branch: "San Francisco",
  },
  {
    id: "6",
    staff: {
      name: "David Wilson",
    },
    email: "david.wilson@example.com",
    role: "Sales",
    branch: "Dallas",
  },
  {
    id: "7",
    staff: {
      name: "Emily Davis",
      imageUrl: "https://example.com/emily.jpg",
    },
    email: "emily.davis@example.com",
    role: "Designer",
    branch: "Seattle",
  },
  {
    id: "8",
    staff: {
      name: "Frank Harris",
    },
    email: "frank.harris@example.com",
    role: "Manager",
    branch: "New York",
  },
  {
    id: "9",
    staff: {
      name: "Grace Martinez",
      imageUrl: "https://example.com/grace.jpg",
    },
    email: "grace.martinez@example.com",
    role: "Developer",
    branch: "Los Angeles",
  },
  {
    id: "10",
    staff: {
      name: "Hannah Clark",
    },
    email: "hannah.clark@example.com",
    role: "HR",
    branch: "Chicago",
  },
  {
    id: "11",
    staff: {
      name: "Ivy Lewis",
      imageUrl: "https://example.com/ivy.jpg",
    },
    email: "ivy.lewis@example.com",
    role: "Sales",
    branch: "Miami",
  },
  {
    id: "12",
    staff: {
      name: "Jack Walker",
    },
    email: "jack.walker@example.com",
    role: "Developer",
    branch: "San Francisco",
  },
  {
    id: "13",
    staff: {
      name: "Katie Young",
      imageUrl: "https://example.com/katie.jpg",
    },
    email: "katie.young@example.com",
    role: "Manager",
    branch: "Dallas",
  },
  {
    id: "14",
    staff: {
      name: "Leo Scott",
    },
    email: "leo.scott@example.com",
    role: "Designer",
    branch: "Seattle",
  },
  {
    id: "15",
    staff: {
      name: "Mia Adams",
      imageUrl: "https://example.com/mia.jpg",
    },
    email: "mia.adams@example.com",
    role: "HR",
    branch: "Chicago",
  },
  {
    id: "16",
    staff: {
      name: "Nathan Moore",
    },
    email: "nathan.moore@example.com",
    role: "Sales",
    branch: "Los Angeles",
  },
  {
    id: "17",
    staff: {
      name: "Olivia Nelson",
      imageUrl: "https://example.com/olivia.jpg",
    },
    email: "olivia.nelson@example.com",
    role: "Manager",
    branch: "Miami",
  },
  {
    id: "18",
    staff: {
      name: "Paul Green",
    },
    email: "paul.green@example.com",
    role: "Developer",
    branch: "New York",
  },
  {
    id: "19",
    staff: {
      name: "Quincy Carter",
      imageUrl: "https://example.com/quincy.jpg",
    },
    email: "quincy.carter@example.com",
    role: "HR",
    branch: "Dallas",
  },
];

const StaffHomepage = () => {
  return (
    <section className="">
      <StaffRoleHeader />
      <StaffDataTable columns={Staffcolumns} data={staffData} />
    </section>
  );
};

export default StaffHomepage;
