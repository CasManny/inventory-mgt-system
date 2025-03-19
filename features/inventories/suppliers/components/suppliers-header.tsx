import { AddSupplier } from "./add-supplier";

export const SuppliersHeader = () => {
  return (
    <div className="flex justify-between items-center p-3.5 border-b">
      <h1 className="text-2xl font-semibold">Suppliers</h1>
      <div className="space-x-3 flex">
        <AddSupplier />
      </div>
    </div>
  );
};
