import { ExportSales } from './export-sales';

export const SalesHeader = () => {
  return (
    <div className="flex justify-between items-center p-3.5 border-b">
      <h1 className="text-2xl font-semibold">Sales</h1>
      <div className="space-x-3 flex">
        <ExportSales />
      </div>
    </div>
  );
}
