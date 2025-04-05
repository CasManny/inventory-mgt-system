import { db } from "@/db";
import { branches, branchInsertSchema } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { and, eq } from "drizzle-orm";

export const branchesRouter = createTRPCRouter({
  addBranch: protectedProcedure
    .input(branchInsertSchema)
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx;
      const { name, location, numberOfRegister, numberOfStaff } = input;
      const [existingBranch] = await db
        .select()
        .from(branches)
        .where(and(eq(branches.userId, ctx.user.id), eq(branches.name, name)));

      if (existingBranch) {
        throw new TRPCError({
          message: "Branch already exist in Database",
          code: "CONFLICT",
        });
      }

      const [newBranch] = await db
        .insert(branches)
        .values({
          name,
          numberOfRegister,
          numberOfStaff,
          location,
          userId: user.id,
        })
        .returning();

      return newBranch;
    }),
  getAllBranches: protectedProcedure.query(async ({ ctx }) => {
    const data = await db
      .select({
        id: branches.id,
        name: branches.name,
        address: branches.location,
        numberOfStaff: branches.numberOfStaff,
        numberOfRegisters: branches.numberOfRegister
      })
      .from(branches)
      .where(eq(branches.userId, ctx.user.id));

    return data;
  }),
});
