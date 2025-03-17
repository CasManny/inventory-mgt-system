import React from 'react'
import { AddBranch } from './add-branch';

export const BranchHeader = () => {
  return (
    <div className="flex justify-between items-center p-3.5 border-b">
      <h1 className="text-2xl font-semibold">Branches</h1>
      <div className="space-x-3 flex">
        <AddBranch />
      </div>
    </div>
  );
}
