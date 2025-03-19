"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  ChevronDown,
  ImageIcon,
  MoreHorizontal,
  Pencil,
  Trash,
} from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Stock = {
  id: string;
  date: string;
  item: string;
  reason: string;
  staffName: string;
  branch: string;
    adjustment: number;
    stockBefore: number;
};

export const ItemsColumns: ColumnDef<Stock>[] = [
  {
    accessorKey: "item",
    header: "Items",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        {row.original.item.imageUrl ? (
          <div className="relative size-8">
            <Image
              src={row.original.item.imageUrl}
              alt={row.original.item.name}
              fill
              className="w-10 h-10 rounded"
            />
          </div>
        ) : (
          <Button variant={"outline"} size={"icon"}>
            <ImageIcon className="size-5 rounded-full" />
          </Button>
        )}
        <span>{row.original.item.name || "No Name"}</span>
      </div>
    ),
    filterFn: (row, columnId, filterValue) => {
      return row.original.item.name
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "unit",
    header: "Unit",
  },
  {
    accessorKey: "branch",
    header: "Branch",
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => {
      const low = row.original.isLow;
      return (
        <div className="">
          {low ? (
            <div className="text-red-500 flex w-fit bg-red-300 text-xs rounded py-1 px-2 items-center">
              <ChevronDown stroke="#fb2c36" className="size-4" />
              <span className="">{row.original.stock}</span>
            </div>
          ) : (
            <span className="">{row.original.stock}</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "sellingPrice",
    header: "Selling Price",
  },
  {
    accessorKey: "costPrice",
    header: "Cost Price",
  },
  {
    accessorKey: "supplier",
    header: "Supplier",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Pencil /> <span>Update item</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <Trash stroke="#fb2c36" />
              <span>Delete item</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
