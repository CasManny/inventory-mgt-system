import { create } from "zustand";

interface AddCategoryModalState {
  openAddCategoryModal: boolean;
  setOpenAddCategoryModal: (isOpen: boolean) => void; // Fixed typo from "setOpenAddCategoryModel"
}

export const useAddCategoryModalStore = create<AddCategoryModalState>((set) => ({
  openAddCategoryModal: false,
  setOpenAddCategoryModal: (isOpen) => set({ openAddCategoryModal: isOpen }),
}));
