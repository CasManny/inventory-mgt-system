"use client";
import React, { useState } from "react";
import { AddStaff } from "./add-staff";
import { AddStaffModal } from "./add-staff-modal";

export const StaffRoleHeader = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex justify-between items-center p-3.5 border-b">
      <h1 className="text-2xl font-semibold tracking-tighter">Staff & Roles</h1>
      <div className="space-x-3 flex">
        <AddStaff setOpenModal={setOpenModal} />
        <AddStaffModal open={openModal} setOpen={setOpenModal} />
      </div>
    </div>
  );
};
