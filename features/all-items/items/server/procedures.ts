import { db } from "@/db";
import {
  branches,
  categories,
  categoryItemInsertSchema,
  categoryItems,
  suppliers,
} from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { and, eq, isNotNull, lt, lte } from "drizzle-orm";

export const categoryItemsRouter = createTRPCRouter({
  getAllItems: protectedProcedure.query(async ({ ctx }) => {
    const lowStock = db.$with("low_stock").as(
      db
        .select({
          id: categoryItems.id,
          isLow: categoryItems.trackAlert,
        })
        .from(categoryItems)
        .where(
          and(
            // eq(categoryItems.trackAlert, true),
            isNotNull(categoryItems.lowStockAlert),
            lte(categoryItems.stockQuantity, categoryItems.lowStockAlert),
            eq(categoryItems.userId, ctx.user.id)
          )
        )
    );
    const data = await db
      .with(lowStock)
      .select({
        id: categoryItems.id,
        supplier: suppliers.supplierName,
        branch: branches.name,
        isLow: lowStock.isLow,
        category: categories.categoryName,
        name: categoryItems.itemName,
        imageUrl: categoryItems.imageUrl,
        stock: categoryItems.stockQuantity,
        sellingPrice: categoryItems.sellingPrice,
        costPrice: categoryItems.costPrice,
      })
      .from(categoryItems)
      .leftJoin(lowStock, eq(categoryItems.id, lowStock.id))
      .leftJoin(suppliers, eq(suppliers.id, categoryItems.supplierId))
      .leftJoin(categories, eq(categories.id, categoryItems.categoryId))
      .leftJoin(branches, eq(branches.id, categoryItems.branchId))
      .where(eq(categoryItems.userId, ctx.user.id));

    return data;
  }),
  createItem: protectedProcedure
    .input(categoryItemInsertSchema)
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx;
      const {
        itemName,
        branchId,
        costPrice,
        categoryId,
        imageUrl,
        lowStockAlert,
        sellingPrice,
        stockQuantity,
        supplierId,
        trackAlert,
      } = input;

      const [newItem] = await db
        .insert(categoryItems)
        .values({
          ...input,
          userId: ctx.user.id,
        })
        .returning();
      
      return newItem
    }),
});
