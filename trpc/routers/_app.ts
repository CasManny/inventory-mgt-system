import { categoriesRouter } from "@/features/all-items/categories/server/procedures";
import { createTRPCRouter } from "../init";
import { suppliersRouter } from "@/features/inventories/suppliers/server/procedures";
export const appRouter = createTRPCRouter({
  suppliers: suppliersRouter,
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
