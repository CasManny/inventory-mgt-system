import { inventoryLinks } from "@/data/constants";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-white flex justify-between">
          <div className="">
            <h1 className="font-extrabold text-2xl">INventrory</h1>
            <p className="text-sm">
              The smartest way to manage your inventory and grow your business.
            </p>
          </div>
          <div className="flex-1 px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {inventoryLinks.map((item, index) => (
                <div className="">
                  <h3 className="font-bold mb-5">{item.Name}</h3>
                  <div className="flex flex-col space-y-2.5">
                    {item.links.map((link, index) => (
                      <Link href={link.href} className="text-sm">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
