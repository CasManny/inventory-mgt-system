import React from "react";
import { Heading } from "./heading";
import { Button } from "./ui/button";

export const StartTrial = () => {
  return (
    <section className="bg-brand-primary py-20">
      <div className="flex items-center justify-center max-w-4xl mx-auto flex-col gap-5 text-white">
        <Heading
          title="Ready to Streamline Your Inventory?"
          className="text-white text-center"
        />
        <p className="text-lg font-medium text-center max-w-[700px]">
          Join thousands of businesses that trust InventoryPro to optimize their
          stock levels, reduce costs, and boost sales.
        </p>
        <Button className="bg-white text-brand-primary hover:bg-white/90">Start Your 14-Day Free Trial</Button>
      </div>
    </section>
  );
};
