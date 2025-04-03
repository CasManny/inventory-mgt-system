import { db } from "@/db";
import { categories, categoryItems, users } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { and, eq } from "drizzle-orm";
import { z } from "zod";

export const categoriesRouter = createTRPCRouter({
  getAllCategories: protectedProcedure.query(async ({ ctx }) => {
    const data = await db
      .select({
        name: categories.categoryName,
        id: categories.id,
      })
      .from(categories)
      .where(eq(categories.userId, ctx.user.id));

    return data.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  }),

  createCategory: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { name } = input;

      const [existingCategoryName] = await db
        .select()
        .from(categories)
        .where(
          and(
            eq(categories.categoryName, name),
            eq(categories.userId, ctx.user.id)
          )
        )
        .limit(1);

      if (existingCategoryName) {
        throw new TRPCError({
          message: "category already created!!!",
          code: "CONFLICT",
        });
      }

      const [data] = await db
        .insert(categories)
        .values({
          categoryName: name,
          userId: ctx.user.id,
        })
        .returning();

      return data;
    }),

  getAllCategoriesWithItems: protectedProcedure.query(async ({ ctx }) => {
    const { user } = ctx;
    const data = await db
      .select({
        id: categories.id,
        name: categories.categoryName,
        items: db.$count(
          categoryItems,
          eq(categoryItems.categoryId, categories.id)
        ),
      })
      .from(categories)
      .where(eq(categories.userId, user.id));

    return data;
  }),
});
