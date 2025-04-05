import { categoriesRouter } from "@/features/all-items/categories/server/procedures";
import { createTRPCRouter } from "../init";
import { suppliersRouter } from "@/features/inventories/suppliers/server/procedures";
import { branchesRouter } from "@/features/administration/branches/server/procedures";
import { categoryItemsRouter } from "@/features/all-items/items/server/procedures";
export const appRouter = createTRPCRouter({
  branches: branchesRouter,
  suppliers: suppliersRouter,
  items: categoryItemsRouter,
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
