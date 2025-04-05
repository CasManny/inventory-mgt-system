"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { trpc } from "@/trpc/client";
import { Loader2, X } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(5, "name should be at least 5 characters"),
  location: z.string(),
  numberOfStaff: z.coerce.number(),
  numberOfRegister: z.coerce.number(),
});

export const AddNewBranchForm = () => {
  const utils = trpc.useUtils();
  const createNewBranch = trpc.branches.addBranch.useMutation({
    onSuccess: () => {
      toast.success("branch added");
      utils.branches.getAllBranches.invalidate();
      form.reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      numberOfRegister: undefined,
      numberOfStaff: undefined,
    },
  });

  const isPending = createNewBranch.isPending;
  function onSubmit(values: z.infer<typeof formSchema>) {
    createNewBranch.mutate(values);
  }
  return (
    <div className="h-full overflow-hidden flex flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex-1 overflow-auto"
        >
          <div className="flex justify-between items-center border-b px-3 py-2">
            <Link
              href={"/dashboard/branches"}
              className="size-10 rounded-full flex-center bg-gray-200"
            >
              <X className="size-5" />
            </Link>
            <h3 className="font-bold text-lg">Add a new branch</h3>
            <Button disabled={isPending} type="submit" variant={"brandButton"}>
              {isPending ? <Loader2 className="animate-spin" /> : "Add branch"}
            </Button>
          </div>
          <div className="max-w-2xl mx-auto mt-20">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="Branch Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfRegister"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="No. of registers"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfStaff"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="No. of staff"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
