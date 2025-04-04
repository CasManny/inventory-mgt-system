"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ItemType } from "./item-type";
import { Separator } from "@/components/ui/separator";
import { SelectCategory } from "./select-category";
import { SelectSupplier } from "./select-supplier";
import { ProfitLossIndicator } from "./profit-loss-indicator";

const itemVariable: {
  label: string;
  desc: string;
  state: "standard" | "variable";
}[] = [
  {
    label: "Standard item",
    desc: "",
    state: "standard",
  },
  {
    label: "Variable item",
    desc: "",
    state: "variable",
  },
];

const formSchema = z.object({
  itemName: z.string().min(2, {
    message: "Item name must be at least 2 characters.",
  }),
  category: z.string().optional(),
  supplier: z.string().optional(),
  sellingPrice: z.coerce.number().optional(),
  costPrice: z.coerce.number().optional(),
  stockQuantity: z.number().optional(),
  lowStockAlert: z.number().optional(),
  monitorStock: z.boolean(),
});

export const CreateItemForm = () => {
  const [itemState, setItemState] = useState<"standard" | "variable">(
    "standard"
  );
  const [trackInventory, setTrackInventory] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemName: "",
      category: "",
      stockQuantity: undefined,
      lowStockAlert: undefined,
      sellingPrice: undefined,
      costPrice: undefined,
      monitorStock: trackInventory,
      supplier: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between px-1.5 py-2 items-center border-b sticky top-0 bg-brand-light backdrop-blur-sm">
          <Link
            href={"/dashboard/items"}
            className="size-10 rounded-full flex-center bg-gray-100"
          >
            <X className="size-5 text-black" />
          </Link>
          <h3 className="text-xl font-semibold">Add an Item</h3>
          <Button
            type="submit"
            className="bg-brand-primary hover:bg-brand-primary/90"
          >
            Create item
          </Button>
        </div>

        <div className="max-w-2xl mx-auto pb-16">
          <div className="">
            <div className="mb-5">
              <h3 className="font-bold text-lg mb-3">Item type</h3>
              <p>
                Select the item type that best fits how you sell and manage it.
                Hover on the info icon for more details
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 my-8">
            {itemVariable.map((item) => (
              <ItemType
                key={item.state}
                label={item.label}
                state={item.state}
                isSelected={itemState === item.state}
                onClick={() => setItemState(item.state)}
              />
            ))}
          </div>
          <Separator className="h-5" />
          <div className="mt-15">
            <div className="mb-11">
              <h3 className="text-xl font-bold">Item details</h3>
              <p className="text-sm">
                Enter item name and select an optional category
              </p>
            </div>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="itemName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Item name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g Spicy Turkey" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="sellingPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Selling Price</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="costPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cost Price</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ProfitLossIndicator
                  costPrice={form.watch("costPrice")}
                  sellingPrice={form.watch("sellingPrice")}
                />
              </div>
              <FormField
                control={form.control}
                name="category"
                render={() => <SelectCategory />}
              />
              <FormField
                control={form.control}
                name="supplier"
                render={() => <SelectSupplier />}
              />
              <div className="space-y-4">
                <h1 className="text-xl font-bold">Track Inventory</h1>
                <div className="flex justify-between">
                  <p className="max-w-[600px] text-sm ">
                    Enable stock tracking for your item so you can have accurate
                    inventory tracking. Setting a low stock alert will enable
                    recieving alerts when the stock of the item is low
                  </p>
                  <Switch
                    className="data-[state=checked]:bg-blue-500"
                    checked={trackInventory}
                    onCheckedChange={setTrackInventory}
                  />
                </div>
                {trackInventory && (
                  <div className="space-y-5 mt-10">
                    <FormField
                      control={form.control}
                      name="stockQuantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Stock Quantity</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter stock quantity"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lowStockAlert"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Low Stock Alert</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter low stock alert quantity"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};
