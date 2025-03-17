"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";

export type Staff = {
  id: string;
  staff: {
    name: string;
    imageUrl?: string;
  };
  email: string;
  role: string;
  branch: string;
};

export const Staffcolumns: ColumnDef<Staff>[] = [
  {
    accessorKey: "staff",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src={row.original.staff.imageUrl} />
          <AvatarFallback>
            {row.original.staff.name[0]?.toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span>{row.original.staff.name}</span>
      </div>
    ),
    filterFn: (row, columnId, filterValue) => {
      return row.original.staff.name
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "email",
    header: "Email",
    filterFn: (row, columnId, filterValue) => {
      return row.original.email
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    },
    enableColumnFilter: true, // Ensures filtering is enabled
  },
  {
    accessorKey: "role",
    header: "Role",
    filterFn: (row, columnId, filterValue) => {
      return row.original.role
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
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
    ),
  },
];
