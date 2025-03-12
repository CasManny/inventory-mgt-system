"use client"
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="outline">
          <Menu strokeWidth={2} className="fill-brand-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className="p-5">
          <div className="flex flex-col gap-2 text-dark w-full">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-lg capitalize font-medium"
                onClick={handleClose}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="space-y-5 flex flex-col mt-10">
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "border px-5 h-10"
              )}
              onClick={handleClose}
            >
              Login
            </Link>
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "bg-blue-500 text-white transition-colors duration-300 text-lg hover:bg-blue-500/90 font-extrabold px-8 h-10"
              )}
              onClick={handleClose}
            >
              Sign up
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
