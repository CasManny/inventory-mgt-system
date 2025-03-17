import { BaggageClaim, Focus, Home } from "lucide-react";
import { DashboardNavSelector } from "./dashboard-nav-selector";
import Link from "next/link";
import { DashboardSelectBranch } from "./dasboard-select-branch";

const DashboardLinks = [
  {
    label: "Home",
    icon: Home,
    href: "/dashboard",
  },
  {
    label: "Sales",
    icon: BaggageClaim,
    href: "/dashboard/sales",
  },
  {
    label: "Reports",
    icon: Focus,
    href: "/dashboard/reports",
  },
];

export const DashboardSidebar = () => {
  return (
    <div className="w-60 fixed top-0 bottom-0 border-r overflow-scroll no-scrollbar">
      <DashboardSelectBranch />
      <div className="space-y-2">
        <div className="space-y-1 border-b p-5">
          {DashboardLinks.map(({ label, icon: Icon, href }, index) => (
            <Link
              href={href}
              key={index}
              className="flex items-center gap-2 p-3 rounded hover:bg-gray-100"
            >
              <Icon className="size-5" />
              <span className="text-sm">{label}</span>
            </Link>
          ))}
        </div>
        <DashboardNavSelector />
      </div>
    </div>
  );
};
