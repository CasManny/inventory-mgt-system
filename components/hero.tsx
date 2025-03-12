import Image from "next/image";
import { Button } from "./ui/button";
import { Heading } from "./heading";

export const HeroSection = () => {
  return (
    <section className="flex items-center max-w-7xl mx-auto justify-center px-20 pt-20">
      <div className="flex flex-col">
        <div className="pb-20">
          <Heading title="Smart Inventory Management for Growing Businesses" />
          <p className="text-brand-gray mb-2">
            Streamline your operations, reduce costs, and boost sales with our
            all-in-one inventory management solution.
          </p>
          <div className="flex space-x-5 mt-5">
            <Button className="" variant={"outline"}>
              Start Free Trial
            </Button>
            <Button className="bg-brand-primary hover:bg-brand-primary/90">
              Book a Demo
            </Button>
          </div>
        </div>
        <div className="size-fullmt-5 p-10  relative">
          <div className="bg-black/10 inset-0 absolute rounded-2xl" />
          <div className="w-full max-w-3xl mx-auto h-[60vh] relative">
            <Image src={"/dashboard.png"} fill alt="dashboard" />
          </div>
        </div>
      </div>
    </section>
  );
};
