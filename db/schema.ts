import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

const createdAt = timestamp("created_at").defaultNow().notNull();
const updatedAt = timestamp("updated_at").defaultNow().notNull();
const id = uuid("id").primaryKey().defaultRandom();

export const users = pgTable(
  "users",
  {
    id,
    clerkId: text("clerk_id").unique().notNull(),
    name: text("user_name").notNull(),
    imageUrl: text("image_url"),
    email: text("email_address").unique().notNull(),
    createdAt,
    updatedAt,
  },
  (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)]
);

export const usersRelations = relations(users, ({ many }) => ({
  categories: many(categories),
  suppliers: many(suppliers),
}));

export const categories = pgTable("categories", {
  id,
  categoryName: text("category_name").notNull().unique(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
});

export const categoriesRelations = relations(categories, ({ one, many }) => ({
  user: one(users, {
    fields: [categories.userId],
    references: [users.id],
  }),
  items: many(categoryItems),
}));

export const branches = pgTable("branches", {
  id,
  name: text("branch_name").notNull(),
  location: text("location"),
  numberOfStaff: integer("number_of_staff"),
  numberOfRegister: integer("number_of_register"),
  createdAt,
  updatedAt,
});

export const branchesRelations = relations(branches, ({ many }) => ({
  items: many(categoryItems),
}));

export const categoryItems = pgTable("category_items", {
  id,
  itemName: text("item_name").notNull(),
  categoryId: uuid("category_id").references(() => categories.id, {
    onDelete: "cascade",
  }),
  supplierId: uuid("supplier_id").references(() => suppliers.id, {
    onDelete: "set null",
  }),
  stockQuantity: integer("stock_quantity"),
  trackAlert: boolean("track_alert"),
  lowStockAlert: integer("low_stock_alert"),
  branchId: uuid("branch_id").references(() => branches.id, {
    onDelete: "set null",
  }),
  sellingPrice: integer("selling_price"),
  costPrice: integer("cost_price"),
  imageUrl: text("image_url"),
  createdAt,
  updatedAt,
});

export const categoryItemsRelations = relations(categoryItems, ({ one }) => ({
  category: one(categories, {
    fields: [categoryItems.categoryId],
    references: [categories.id],
  }),
  branch: one(branches, {
    fields: [categoryItems.branchId],
    references: [branches.id],
  }),
  supplier: one(suppliers, {
    fields: [categoryItems.supplierId],
    references: [suppliers.id],
  }),
}));

export const suppliers = pgTable("suppliers", {
  id,
  supplierName: text("supplier_name").unique().notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull().unique(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }),
});

export const suppliersRelations = relations(suppliers, ({ many, one }) => ({
  items: many(categoryItems),
  user: one(users, {
    fields: [suppliers.userId],
    references: [users.id],
  }),
}));

export const supplierCreateSchema = createInsertSchema(suppliers);
export const supplierUpdateSchema = createUpdateSchema(suppliers);
export const supplierSelectSchema = createSelectSchema(suppliers);
