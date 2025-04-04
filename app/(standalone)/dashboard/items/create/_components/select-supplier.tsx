"use client";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { trpc } from "@/trpc/client";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export const SelectSupplier = () => {
  const { setValue, watch } = useFormContext();
  const selectedSupplier = watch("supplier");
  const [inputValue, setInputValue] = useState(""); // Track user input
  // Fetch categories
  const { data, isLoading } = trpc.suppliers.getAllSuppliers.useQuery();

  const suppliers = data?.map((item) => ({
    value: item.id,
    label: item.supplierName,
  }));

  return (
    <FormItem>
      <div className="flex justify-between items-center">
        <FormLabel>Supplier</FormLabel>
        <span className="text-sm text-muted-foreground">Optional</span>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              role="combobox"
              className={cn(
                "w-full justify-between",
                !selectedSupplier && "text-muted-foreground"
              )}
            >
              {selectedSupplier
                ? suppliers?.find(
                    (supplier) => supplier.value === selectedSupplier
                  )?.label
                : isLoading
                ? "Loading..."
                : "select item supplier"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command className="w-full">
            <CommandInput
              placeholder="Search suppliers..."
              value={inputValue}
              onValueChange={setInputValue} // Update state when user types
            />
            <CommandList className="sm:w-[500px]">
              <CommandEmpty>
                <p className="text-muted-foreground">No supplier found.</p>
              </CommandEmpty>
              <CommandGroup className="w-full">
                {suppliers?.map((supplier) => (
                  <CommandItem
                    value={supplier.value} // Backend returns value = id
                    key={supplier.value}
                    onSelect={() => setValue("category", supplier.value)}
                    className="w-full"
                  >
                    {supplier.label} {/* Display label */}
                    <Check
                      className={cn(
                        "ml-auto",
                        supplier.value === selectedSupplier
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
};
