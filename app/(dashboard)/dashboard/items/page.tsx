import { ItemsHeader } from "@/features/all-items/items/components/items-header";
import { ItemsSection } from "@/features/all-items/items/components/items-section";
import { HydrateClient, trpc } from "@/trpc/server";

const ItemsHomepage = () => {
  void trpc.items.getAllItems.prefetch();
  return (
    <HydrateClient>
      <ItemsHeader />
      <ItemsSection />
    </HydrateClient>
  );
};

export default ItemsHomepage;
