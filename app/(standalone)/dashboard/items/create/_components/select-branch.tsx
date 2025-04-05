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

export const SelectBranch = () => {
  const { setValue, watch } = useFormContext();
  const selectedBranch = watch("branchId");
  const [inputValue, setInputValue] = useState(""); // Track user input
  // Fetch categories
  const { data, isLoading } = trpc.branches.getAllBranches.useQuery();

  const branches = data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  return (
    <FormItem>
      <div className="flex justify-between items-center">
        <FormLabel>Branch</FormLabel>
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
                !selectedBranch && "text-muted-foreground"
              )}
            >
              {selectedBranch
                ? branches?.find(
                    (branch) => branch.value === selectedBranch
                  )?.label
                : isLoading
                ? "Loading..."
                : "select item branch"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command className="w-full">
            <CommandInput
              placeholder="Search branch..."
              value={inputValue}
              onValueChange={setInputValue} // Update state when user types
            />
            <CommandList className="sm:w-[500px]">
              <CommandEmpty>
                <p className="text-muted-foreground">No supplier found.</p>
              </CommandEmpty>
              <CommandGroup className="w-full">
                {branches?.map((branch) => (
                  <CommandItem
                    value={branch.value} // Backend returns value = id
                    key={branch.value}
                    onSelect={() => setValue("branchId", branch.value)}
                    className="w-full"
                  >
                    {branch.label} {/* Display label */}
                    <Check
                      className={cn(
                        "ml-auto",
                        branch.value === selectedBranch
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
