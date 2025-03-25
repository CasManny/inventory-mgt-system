"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
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

const categories = [
  { label: "Food", value: "food" },
  { label: "Drinks", value: "drinks" },
  { label: "Desserts", value: "desserts" },
  { label: "Appetizers", value: "appetizers" },
] as const;

export const SelectCategory = () => {
  const { control, setValue, watch } = useFormContext();
  const selectedCategory = watch("category");

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
                ? categories.find(
                    (category) => category.value === selectedCategory
                  )?.label
                : "click to select"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command className="w-full">
            <CommandInput placeholder="Search category..." />
            <CommandList className="sm:w-[500px]">
              <CommandEmpty>
                <div className="">
                  <p>No category found.</p>
                  <Button className="bg-brand-primary/90 hover:bg-brand-primary cursor-pointer">
                    Create category
                  </Button>
                </div>
              </CommandEmpty>
              <CommandGroup className="w-full">
                {categories.map((category) => (
                  <CommandItem
                    value={category.label}
                    key={category.value}
                    onSelect={() => setValue("category", category.value)}
                    className="w-full"
                  >
                    {category.label}
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
