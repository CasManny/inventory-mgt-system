"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { trpc } from "@/trpc/client";

export const SelectCategory = () => {
  const { setValue, watch } = useFormContext();
  const selectedCategory = watch("category");
  const [inputValue, setInputValue] = useState(""); // Track user input
  const utils = trpc.useUtils();

  // Fetch categories
  const { data: categories, isLoading } =
    trpc.categories.getAllCategories.useQuery();

  // Mutation to create a new category
  const createCategory = trpc.categories.createCategory.useMutation({
    onSuccess: ({ categoryName: label, id: value }) => {
      utils.categories.getAllCategories.invalidate(); // Refresh categories
      setInputValue("")
    },
  });

  return (
    <FormItem>
      <div className="flex justify-between items-center">
        <FormLabel>Category</FormLabel>
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
                !selectedCategory && "text-muted-foreground"
              )}
            >
              {selectedCategory
                ? categories?.find(
                    (category) => category.value === selectedCategory
                  )?.label
                : isLoading
                ? "Loading..."
                : "Click to select"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command className="w-full">
            <CommandInput
              placeholder="Search category..."
              value={inputValue}
              onValueChange={setInputValue} // Update state when user types
            />
            <CommandList className="sm:w-[500px]">
              <CommandEmpty>
                <div className="text-center">
                  <p>No category found.</p>
                  <Button
                    onClick={() => createCategory.mutate({ name: inputValue })}
                    disabled={!inputValue.trim()} // Prevent empty submissions
                    className="bg-brand-primary/90 mt-2 hover:bg-brand-primary cursor-pointer"
                  >
                    {createCategory.isPending
                      ? "Creating..."
                      : `create category`}
                  </Button>
                </div>
              </CommandEmpty>
              <CommandGroup className="w-full">
                {categories?.map((category) => (
                  <CommandItem
                    value={category.value} // Backend returns value = id
                    key={category.value}
                    onSelect={() => setValue("category", category.value)}
                    className="w-full"
                  >
                    {category.label} {/* Display label */}
                    <Check
                      className={cn(
                        "ml-auto",
                        category.value === selectedCategory
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
