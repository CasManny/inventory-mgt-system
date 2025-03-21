import { create } from "zustand";

interface AddStaffModalState {
  openAddStaffModal: boolean;
  setOpenAddStaffModal: (isOpen: boolean) => void; // Fixed typo from "setOpenAddStaffModel"
}

export const useAddStaffModalStore = create<AddStaffModalState>((set) => ({
  openAddStaffModal: false,
  setOpenAddStaffModal: (isOpen) => set({ openAddStaffModal: isOpen }),
}));
