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
export type StockAdjustment = {
  id: string;
  adjustmentId: string;
  date: string;
  reason: string;
  branch: string;
  adjustments: string;
};

export const stockAdjustmentColumns: ColumnDef<StockAdjustment>[] = [
  {
    accessorKey: "adjustmentId",
    header: "Adjustment ID",
    filterFn: (row, columnId, filterValue) => {
      return row.original.adjustmentId
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
  {
    accessorKey: "branch",
    header: "Branch",
  },
  {
    accessorKey: "adjustments",
    header: "Adjustments",
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
