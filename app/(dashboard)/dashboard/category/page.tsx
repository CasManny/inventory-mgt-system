import { CategoryHeader } from "@/features/all-items/categories/components/category-header";
import { CategorySections } from "@/features/all-items/items/sections/category-sections";
import { HydrateClient, trpc } from "@/trpc/server";

const CategoryPage = async () => {
  void trpc.categories.getAllCategoriesWithItems.prefetch();
  return (
    <HydrateClient>
      <CategoryHeader />
      <CategorySections />
    </HydrateClient>
  );
};

export default CategoryPage;
