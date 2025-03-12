import React from "react";
import { Heading } from "./heading";
import { tiers } from "@/data/constants";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export const PricingTiers = () => {
  return (
    <section className="bg-white px-10 md:px-20" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="py-5 md:py-20">
          <Heading
            title="Simple, Transparent Pricing"
            className="text-center mb-10 text-pretty"
          />
          <p className="text-center">
            Choose the plan that fits your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 md:py-20">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={cn(
                tier.popular && "border-2 md:scale-110 border-blue-600",
                "relative bg-brand-gray/10 p-10 rounded "
              )}
            >
              {tier.popular && (
                <div className="absolute -top-[12px] right-[20px] bg-blue-500 font-extrabold px-5 items-center flex justify-center text-white z-10 rounded-full">
                  <span>most popular</span>
                </div>
              )}
              <h3 className="text-2xl font-extrabold">{tier.plan}</h3>
              <div className="my-10">
                <span className="font-extrabold text-4xl">${tier.price}</span>
                <span>/month</span>
              </div>
              <p className="text-sm">{tier.desc}</p>
              <div className="my-5 space-y-3">
                {tier.features.map((item, index) => (
                  <div className="flex gap-2" key={index}>
                    <Check stroke="#98CE00" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
