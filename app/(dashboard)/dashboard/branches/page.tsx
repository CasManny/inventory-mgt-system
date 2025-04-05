import { BranchHeader } from "@/features/administration/branches/components/branch-header";
import { BranchSection } from "@/features/administration/branches/components/branch-section";
import { HydrateClient, trpc } from "@/trpc/server";


const BranchesHomepage = async () => {
  void trpc.branches.getAllBranches.prefetch();
  return (
    <HydrateClient>
      <BranchHeader />
      <BranchSection />
    </HydrateClient>
  );
};

export default BranchesHomepage;
