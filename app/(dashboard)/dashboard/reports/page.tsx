"use client"
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  FileText,
  Download,
  Filter,
  Calendar,
  Layers,
  TrendingUp,
  PackageX,
  Package,
} from "lucide-react";

// Sample data for charts and tables
const salesData = [
  { month: "Jan", sales: 4000, profit: 2400 },
  { month: "Feb", sales: 3000, profit: 1398 },
  { month: "Mar", sales: 2000, profit: 9800 },
  { month: "Apr", sales: 2780, profit: 3908 },
  { month: "May", sales: 1890, profit: 4800 },
  { month: "Jun", sales: 2390, profit: 3800 },
];

const inventoryData = [
  { category: "Electronics", total: 450, low: 35, critical: 12 },
  { category: "Accessories", total: 320, low: 25, critical: 8 },
  { category: "Computers", total: 210, low: 15, critical: 5 },
];

const lowStockReport = [
  {
    name: "Wireless Headphones",
    current: 8,
    min: 50,
    status: "Critical",
    lastRestocked: "2025-02-15",
  },
  {
    name: "Smart Watch X3",
    current: 15,
    min: 40,
    status: "Low",
    lastRestocked: "2025-03-01",
  },
  {
    name: "Bluetooth Speaker",
    current: 22,
    min: 30,
    status: "Low",
    lastRestocked: "2025-02-28",
  },
];

export default function InventoryReports() {
  const [activeTab, setActiveTab] = useState("sales");

  const renderSalesReport = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Sales Performance</h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center bg-blue-50 text-blue-600 px-3 py-2 rounded-lg">
            <Download className="h-4 w-4 mr-2" /> Export
          </button>
          <button className="flex items-center bg-gray-100 text-gray-700 px-3 py-2 rounded-lg">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#3b82f6" name="Sales" />
          <Bar dataKey="profit" fill="#10b981" name="Profit" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const renderInventoryStatusReport = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Inventory Status</h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center bg-blue-50 text-blue-600 px-3 py-2 rounded-lg">
            <Calendar className="h-4 w-4 mr-2" /> Date Range
          </button>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Category</th>
            <th className="p-3">Total Items</th>
            <th className="p-3">Low Stock</th>
            <th className="p-3">Critical Stock</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-3 flex items-center">
                <Layers className="h-5 w-5 mr-2 text-blue-500" />
                {item.category}
              </td>
              <td className="p-3">{item.total}</td>
              <td className="p-3 text-yellow-600">{item.low}</td>
              <td className="p-3 text-red-600">{item.critical}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderLowStockReport = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Low Stock Inventory</h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center bg-red-50 text-red-600 px-3 py-2 rounded-lg">
            <PackageX className="h-4 w-4 mr-2" /> Critical Items
          </button>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Product</th>
            <th className="p-3">Current Stock</th>
            <th className="p-3">Minimum Level</th>
            <th className="p-3">Status</th>
            <th className="p-3">Last Restocked</th>
          </tr>
        </thead>
        <tbody>
          {lowStockReport.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-3 flex items-center">
                <Package className="h-5 w-5 mr-2 text-blue-500" />
                {item.name}
              </td>
              <td className="p-3">{item.current}</td>
              <td className="p-3">{item.min}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    item.status === "Critical"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-3 text-gray-600">{item.lastRestocked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inventory Reports</h1>
        <div className="flex items-center space-x-2">
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
            <FileText className="h-4 w-4 mr-2" /> Generate Report
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setActiveTab("sales")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "sales"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <TrendingUp className="h-4 w-4 mr-2 inline" /> Sales Report
          </button>
          <button
            onClick={() => setActiveTab("inventory")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "inventory"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <Layers className="h-4 w-4 mr-2 inline" /> Inventory Status
          </button>
          <button
            onClick={() => setActiveTab("lowstock")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "lowstock"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <PackageX className="h-4 w-4 mr-2 inline" /> Low Stock Report
          </button>
        </div>

        {activeTab === "sales" && renderSalesReport()}
        {activeTab === "inventory" && renderInventoryStatusReport()}
        {activeTab === "lowstock" && renderLowStockReport()}
      </div>
    </div>
  );
}
