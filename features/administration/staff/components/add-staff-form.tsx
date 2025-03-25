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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddStaffModalStore } from "@/store/add-staff-store-modal";
import { X } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  role: z.string(),
  branch: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

export const AddStaffForm = () => {
  const branches = [
    {
      value: "877",
      label: "Akure",
    },
    {
      value: "8766",
      label: "Abuja",
    },
    {
      value: "87787",
      label: "Lagos",
    },
  ];
  const staffRoles = [
    {
      value: "hhhh",
      label: "Manager",
    },
    {
      value: "hgguu",
      label: "Visitor",
    },
  ];
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      branch: "",
      email: "",
      firstName: "",
      lastName: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
              href={"/dashboard/staff"}
              className="size-10 rounded-full flex-center bg-gray-200"
            >
              <X className="size-5" />
            </Link>
            <h3 className="font-bold text-lg">Invite new member</h3>
            <Button type="submit" variant={"brandButton"}>
              Send invite
            </Button>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="branch"
                render={({ field }) => (
                  <FormItem className="w-full p-0">
                    <FormLabel>Select Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="py-0">
                        <SelectTrigger className="w-full">
                          <SelectValue
                            className="font-semibold text-base"
                            placeholder="Select role"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {staffRoles.map((role) => (
                          <SelectItem
                            className="font-semibold text-base capitalize"
                            value={role.value}
                            key={role.value}
                          >
                            {role.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Snow" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="flex justify-between">
                      <FormLabel>Email</FormLabel>
                      <span className="font-bold">optional</span>
                    </div>
                    <FormControl>
                      <Input placeholder="address@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-16 space-y-5">
                <div className="">
                  <h3 className="text-lg font-semibold">Select branches</h3>
                  <p>
                    Choose which branch of your business you would like to
                    assign this member
                  </p>
                </div>
                <div className="flex items-center border py-1 px-3 rounded-md">
                  <p className="whitespace-nowrap">Select branch</p>
                  <FormField
                    control={form.control}
                    name="branch"
                    render={({ field }) => (
                      <FormItem className="w-full p-0">
                        <FormLabel></FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="py-0">
                            <SelectTrigger className="w-full border-none">
                              <SelectValue placeholder="Select branch" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {branches.map((branch) => (
                              <SelectItem
                                className="capitalize"
                                value={branch.value}
                                key={branch.value}
                              >
                                {branch.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
