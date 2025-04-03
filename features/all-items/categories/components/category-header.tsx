"use client"
import React from 'react'
import { AddCategory } from './add-category';
import { useAddCategoryModalStore } from '@/store/add-category-store-modal';
import { CreateCategoryModal } from './create-category-modal';

export const CategoryHeader = () => {
  const { setOpenAddCategoryModal, openAddCategoryModal } = useAddCategoryModalStore()
  return (
    <div className="flex justify-between items-center p-3.5 border-b">
      <h1 className="text-2xl font-semibold">Categories</h1>
      <AddCategory onClick={setOpenAddCategoryModal} />
      <CreateCategoryModal open={openAddCategoryModal} setOPen={setOpenAddCategoryModal} />
    </div>
  );
}
