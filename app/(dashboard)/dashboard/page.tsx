import { DashboardAlerts } from "@/features/dashboard/components/dashboard-alerts";
import { DashboardHeader } from "@/features/dashboard/components/dashboard-header";
import { DashboardInventoryChart } from "@/features/dashboard/components/dashboard-inventory-chart";
import { DashboardQuickActions } from "@/features/dashboard/components/dashboard-quick-actions";
import { DashboardRecentActivity } from "@/features/dashboard/components/dashboard-recent-activity";
import React from "react";

const DashboardHomepage = () => {
  return (
    <section className="p-5">
      <DashboardHeader />
      <div className="">
        <div className="flex gap-2 my-5">
          <DashboardQuickActions />
          <DashboardAlerts />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <DashboardInventoryChart />
          <DashboardRecentActivity />
        </div>
      </div>
    </section>
  );
};

export default DashboardHomepage;
