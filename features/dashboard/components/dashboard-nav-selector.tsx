"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { Group, Package, Paperclip, RulerIcon, TrendingUp } from "lucide-react";

type Selector = {
  name: string;
  links: {
    icon: LucideIcon;
    label: string;
    href: string;
  }[];
};

const selector: Selector[] = [
  {
    name: "ITEMS",
    links: [
      {
        icon: Group,
        label: "All Items",
        href: "/dashboard/items",
      },
      {
        icon: Package,
        label: "Categories",
        href: "/dashboard/category",
      },
    ],
  },
  {
    name: "INVENTORY",
    links: [
      {
        icon: Paperclip,
        label: "Stock History",
        href: "/dashboard/history",
      },
      {
        icon: TrendingUp,
        label: "Stock Adjustment",
        href: "/dashboard/stock-adjustment",
      },
      {
        icon: RulerIcon,
        label: "Suppliers",
        href: "/dashboard/supplies",
      },
    ],
  },
  {
    name: "ADMINISTRATION",
    links: [
      {
        icon: Paperclip,
        label: "Staff & Roles",
        href: "/dashboard/staff",
      },
      {
        icon: TrendingUp,
        label: "Branches",
        href: "/dashboard/branches",
      },
      {
        icon: RulerIcon,
        label: "Registers",
        href: "/dashboard/registers",
      },
    ],
  },
];
export const DashboardNavSelector = () => {
  return (
    <div className="p-5">
      <Accordion
        type="multiple"
        defaultValue={selector.map((_, i) => `item-${i}`)}
      >
        {selector.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border-none">
            <AccordionTrigger className="text-gray-400 text-xs">{item.name}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-1">
                {item.links.map(({ icon: Icon, href, label }, i) => (
                  <Link href={href} key={i} className="flex gap-2 items-center hover:bg-gray-100 p-3 rounded">
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{label}</span>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
