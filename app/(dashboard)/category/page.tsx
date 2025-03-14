"use client";
import { AddCategory } from "@/features/categories/components/add-category";
import { CreateCategoryModal } from "@/features/categories/components/create-category-modal";
import React, { useState } from "react";

const CategoryPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="">
      <CreateCategoryModal open={open} setOPen={setOpen} />
      <div className="flex justify-between items-center p-3.5 border-b">
        <h1>Categories</h1>
        <AddCategory onClick={setOpen} />
      </div>
    </section>
  );
};

export default CategoryPage;
