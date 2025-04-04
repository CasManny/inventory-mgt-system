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
import { Loader2, X } from "lucide-react";
import Link from "next/link";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";

const formSchema = z.object({
  supplierName: z.string().min(5, "supplier name must be at leat 5 characters"),
  email: z.string().email(),
  phone: z.string().min(10, "phone number must be at least 11 digits"),
});

export const CreateSupplierForm = () => {
  const utils = trpc.useUtils();
  const createSupplier = trpc.suppliers.createSupplier.useMutation({
    onSuccess: () => {
      utils.suppliers.getAllSuppliers.invalidate();
      toast.success("supplier added");
      form.reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      supplierName: "",
      email: "",
      phone: "",
    },
  });

  const isPending = createSupplier.isPending;
  function onSubmit(values: z.infer<typeof formSchema>) {
    createSupplier.mutate(values);
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
              href={"/dashboard/suppliers"}
              className="size-10 rounded-full flex-center bg-gray-200"
            >
              <X className="size-5" />
            </Link>
            <h3 className="font-bold text-lg">Add a new supplier</h3>
            <Button disabled={isPending} type="submit" variant={"brandButton"}>
              {isPending ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Add supplier"
              )}
            </Button>
          </div>
          <div className="max-w-2xl mx-auto mt-20">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="supplierName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="Supplier Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="address@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
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
