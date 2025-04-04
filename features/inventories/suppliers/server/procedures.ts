import { db } from "@/db";
import { supplierCreateSchema, suppliers } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { and, eq } from "drizzle-orm";

export const suppliersRouter = createTRPCRouter({
  createSupplier: protectedProcedure
    .input(supplierCreateSchema)
    .mutation(async ({ input, ctx }) => {
      const { user } = ctx;
      const { email, phone, supplierName } = input;

      const [existingEmail] = await db
        .select()
        .from(suppliers)
        .where(and(eq(suppliers.userId, user.id), eq(suppliers.email, email)))
        .limit(1);

      if (existingEmail) {
        throw new TRPCError({
          message: "supplier already exist",
          code: "CONFLICT",
        });
      }

      const [supplier] = await db
        .insert(suppliers)
        .values({
          email,
          supplierName,
          userId: user.id,
          phone,
        })
        .returning();

      return supplier;
    }),
  getAllSuppliers: protectedProcedure.query(async ({ ctx }) => {
    const data = await db
      .select({
        id: suppliers.id,
        supplierName: suppliers.supplierName,
        email: suppliers.email,
        phone: suppliers.phone,
      })
      .from(suppliers)
      .where(eq(suppliers.userId, ctx.user.id));

    return data;
  }),
});
