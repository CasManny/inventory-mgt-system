import { salesColumns } from "@/features/sales/components/sales-columns";
import { SalesDataTable } from "@/features/sales/components/sales-data-table";
import { SalesHeader } from "@/features/sales/components/sales-header";

export const salesData = [
  {
    id: "1",
    soldBy: "John Doe",
    branch: "Lagos",
    customer: "Alice Johnson",
    paymentMethod: "Credit Card",
    date: "2025-03-21",
    total: "₦50,000",
  },
  {
    id: "2",
    soldBy: "Jane Smith",
    branch: "Abuja",
    customer: "Michael Brown",
    paymentMethod: "Cash",
    date: "2025-03-20",
    total: "₦30,500",
  },
  {
    id: "3",
    soldBy: "David Johnson",
    branch: "Akure",
    customer: "Emily White",
    paymentMethod: "Bank Transfer",
    date: "2025-03-19",
    total: "₦75,200",
  },
  {
    id: "4",
    soldBy: "Sarah Williams",
    branch: "Lagos",
    customer: "Daniel Green",
    paymentMethod: "POS",
    date: "2025-03-18",
    total: "₦20,000",
  },
  {
    id: "5",
    soldBy: "Chris Evans",
    branch: "Abuja",
    customer: "Sophia Martinez",
    paymentMethod: "Mobile Payment",
    date: "2025-03-17",
    total: "₦65,750",
  },
];


const SalesHomepage = () => {
  
  return (
    <section className="">
      <SalesHeader />
      <SalesDataTable data={salesData} columns={salesColumns} />
    </section>
  );
};

export default SalesHomepage;
