import React from "react";
import {
  BellRing,
  ChartSpline,
  Link,
  RefreshCcw,
  TrendingUpDown,
} from "lucide-react";
import { Heading } from "./heading";
import { Card } from "./ui/card";

const ourFeature = [
  {
    icon: TrendingUpDown,
    color: "#FFD131",
    feature: "Real-time Analytics",
    desc: "Get instant insights into stock levels, sales trends, and performance metrics to make data-driven decisions.",
  },
  {
    icon: RefreshCcw,
    feature: "Smart Reordering",
    color: "#E637BF",
    desc: "Automated reorder points and purchase order creation based on historical data and sales forecasts.",
  },
  {
    icon: BellRing,
    feature: "Low Stock Alerts",
    color: "#0075F2",
    desc: "Get notified before you run out of popular items to avoid missing sales opportunities.",
  },
  {
    icon: Link,
    feature: "Multi-channel Integration",
    color: "#8CFF98",
    desc: "Seamlessly connect with your e-commerce platforms, POS systems, and accounting software.",
  },
  {
    icon: ChartSpline,
    feature: "Demand Forecasting",
    color: "#DB3069",
    desc: "AI-powered predictions help you stock the right products at the right time to maximize sales.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-20">
      <div className="">
        <div className="">
          <Heading title="Powerful Features" className="text-center mb-10" />
          <p className="text-center">
            Everything you need to optimize your inventory and grow your
            business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {ourFeature.map((item, index) => (
            <Card className="p-5" key={index}>
              <div className="">
                <div className="bg-black/8 size-10 rounded-full items-center flex justify-center">
                  <item.icon
                    stroke={item.color}
                    strokeWidth={2}
                    className="size-5"
                  />
                </div>
                <h3 className="font-bold text-lg my-3">{item.feature}</h3>
                <p className="text-base">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
