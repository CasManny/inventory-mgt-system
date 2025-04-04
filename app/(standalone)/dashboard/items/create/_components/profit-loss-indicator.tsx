import React from "react";

type Props = {
  sellingPrice?: number;
  costPrice?: number;
};

export const ProfitLossIndicator = ({ sellingPrice, costPrice }: Props) => {
  if (
    sellingPrice == null ||
    costPrice == null ||
    isNaN(sellingPrice) ||
    isNaN(costPrice)
  ) {
    return null;
  }

  const difference = sellingPrice - costPrice;

  if (difference > 0) {
    return (
      <p className="text-green-600 font-medium">
        You will make a profit of ₦{difference.toFixed(2)} on each sale.
      </p>
    );
  }

  if (difference < 0) {
    return (
      <p className="text-red-600 font-medium">
        You will incur a loss of ₦{Math.abs(difference).toFixed(2)} on each
        sale.
      </p>
    );
  }

  return (
    <p className="text-gray-600 font-medium">
      You will break even — no profit or loss.
    </p>
  );
};
