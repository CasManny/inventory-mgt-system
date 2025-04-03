import { navLinks } from "@/data/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MobileNavigation } from "./mobile-navigation";
import { InventoryLogo } from "./logo";
import { auth } from "@clerk/nextjs/server";

export const Navbar = async () => {
  const { userId } = await auth();
  return (
    <nav className="max-w-7xl mx-auto px-10 md:px-20 py-5">
      <div className="flex justify-between items-center">
        <InventoryLogo />
        <div className="flex-1 hidden lg:flex">
          <div className="flex gap-10 text-dark items-center justify-center w-full">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[15px] capitalize font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        {userId ? (
          <Link
            href={"/dashboard"}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "border px-5 h-10"
            )}
          >
            Dashboard
          </Link>
        ) : (
          <div className="space-x-2 hidden lg:flex">
            <Link
              href={"/sign-in"}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "border px-5 h-10"
              )}
            >
              Login
            </Link>
            <Link
              href={"/sign-in"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "bg-blue-500 text-white transition-colors duration-300 text-lg hover:bg-blue-500/90 font-extrabold px-8 h-10"
              )}
            >
              Sign up
            </Link>
          </div>
        )}

        <MobileNavigation />
      </div>
    </nav>
  );
};
