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
export type Sales = {
  id: string;
  soldBy: string;
  branch: string;
  customer: string;
  paymentMethod: string;
  date: string;
  total: string;
};

export const salesColumns: ColumnDef<Sales>[] = [
  {
    accessorKey: "id",
    header: "Sale Id",
  },
  {
    accessorKey: "soldBy",
    header: "Sold by",
  },
  {
    accessorKey: "branch",
    header: "Branch",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },

  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "total",
    header: "Total",
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
