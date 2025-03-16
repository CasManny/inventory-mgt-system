import React from 'react'
import { AddCategory } from './add-category';
interface CategoryHeaderProps {
    setOpen: (open: boolean) => void;
}

export const CategoryHeader = ({setOpen}: CategoryHeaderProps) => {
  return (
    <div className="flex justify-between items-center p-3.5 border-b">
      <h1 className="text-2xl font-semibold">Categories</h1>
      <AddCategory onClick={setOpen} />
    </div>
  );
}
