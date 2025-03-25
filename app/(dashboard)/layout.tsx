import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";
import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="min-h-screen">
      <div className="w-full h-full">
        <DashboardSidebar />
        <div className="pl-60 max-w-7xl mx-auto">{children}</div>
      </div>
    </section>
  );
};

export default DashboardLayout;
