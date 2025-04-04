import { SupplierSection } from "@/features/inventories/suppliers/components/supplier-section";
import { SuppliersHeader } from "@/features/inventories/suppliers/components/suppliers-header";
import { HydrateClient, trpc } from "@/trpc/server";

const SuppliersHomepage = () => {
  void trpc.suppliers.getAllSuppliers.prefetch();
  return (
    <HydrateClient>
      <SuppliersHeader />
      <SupplierSection />
    </HydrateClient>
  );
};

export default SuppliersHomepage;
