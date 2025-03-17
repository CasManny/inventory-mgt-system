"use client";
import { CategoryColumns } from "@/features/all-items/categories/components/category-columns";
import { CategoryDataTable } from "@/features/all-items/categories/components/category-data-table";
import { CategoryHeader } from "@/features/all-items/categories/components/category-header";
import { CreateCategoryModal } from "@/features/all-items/categories/components/create-category-modal";
import { useState } from "react";

export const categories = [
  { id: "1", name: "Electronics", items: 120 },
  { id: "2", name: "Clothing", items: 85 },
  { id: "3", name: "Home & Kitchen", items: 150 },
  { id: "4", name: "Books", items: 200 },
  { id: "5", name: "Sports & Outdoors", items: 90 },
  { id: "6", name: "Toys & Games", items: 75 },
  { id: "7", name: "Beauty & Personal Care", items: 110 },
  { id: "8", name: "Automotive", items: 95 },
  { id: "9", name: "Pet Supplies", items: 130 },
  { id: "10", name: "Grocery", items: 160 },
  { id: "11", name: "Office Supplies", items: 140 },
  { id: "12", name: "Health & Wellness", items: 125 },
  { id: "13", name: "Jewelry & Accessories", items: 105 },
  { id: "14", name: "Furniture", items: 180 },
  { id: "15", name: "Musical Instruments", items: 70 },
  { id: "16", name: "Garden & Outdoor", items: 115 },
  { id: "17", name: "Movies & TV", items: 98 },
  { id: "18", name: "Video Games", items: 175 },
  { id: "19", name: "Baby Products", items: 135 },
  { id: "20", name: "Industrial & Scientific", items: 155 },
];

const CategoryPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="">
      <CreateCategoryModal open={open} setOPen={setOpen} />
      <CategoryHeader setOpen={setOpen} />
      <div className="">
        <CategoryDataTable columns={CategoryColumns} data={categories} />
      </div>
    </section>
  );
};

export default CategoryPage;
