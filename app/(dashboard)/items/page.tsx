import { ItemsColumns } from "@/features/all-items/items/components/items-columns";
import { ItemsDataTable } from "@/features/all-items/items/components/items-data-table";
import { ItemsHeader } from "@/features/all-items/items/components/items-header";

export const itemsData = [
  {
    id: "1",
    item: {
    //   imageUrl: "/images/laptop.jpg",
      name: "Laptop",
    },
    category: "Electronics",
    unit: "pcs",
    branch: "Lagos",
    isLow: false,
    stock: 50,
    sellingPrice: 500000,
    costPrice: 450000,
    supplier: "Tech World Ltd",
  },
  {
    id: "2",
    item: {
    //   imageUrl: "/images/phone.jpg",
      name: "Smartphone",
    },
    category: "Electronics",
    unit: "pcs",
    branch: "Abuja",
    isLow: true,
    stock: 5,
    sellingPrice: 250000,
    costPrice: 220000,
    supplier: "Mobile Hub",
  },
  {
    id: "3",
    item: {
    //   imageUrl: "/images/tshirt.jpg",
      name: "T-Shirt",
    },
    category: "Clothing",
    unit: "pcs",
    branch: "Port Harcourt",
    isLow: false,
    stock: 100,
    sellingPrice: 5000,
    costPrice: 3500,
    supplier: "Fashion Trends",
  },
  {
    id: "4",
    item: {
      imageUrl: "",
      name: "Washing Machine",
    },
    category: "Home Appliances",
    unit: "pcs",
    branch: "Lagos",
    isLow: false,
    stock: 20,
    sellingPrice: 150000,
    costPrice: 120000,
    supplier: "Home Solutions Ltd",
  },
  {
    id: "5",
    item: {
      imageUrl: "",
      name: "Microwave",
    },
    category: "Kitchen Appliances",
    unit: "pcs",
    branch: "Kano",
    isLow: false,
    stock: 30,
    sellingPrice: 75000,
    costPrice: 65000,
    supplier: "Kitchen Pro",
  },
  {
    id: "6",
    item: {
      imageUrl: "",
      name: "Tennis Racket",
    },
    category: "Sports",
    unit: "pcs",
    branch: "Abuja",
    isLow: true,
    stock: 8,
    sellingPrice: 40000,
    costPrice: 35000,
    supplier: "Sports Gear",
  },
  {
    id: "7",
    item: {
      imageUrl: "",
      name: "Sofa Set",
    },
    category: "Furniture",
    unit: "set",
    branch: "Lagos",
    isLow: false,
    stock: 15,
    sellingPrice: 300000,
    costPrice: 250000,
    supplier: "FurniLux",
  },
  {
    id: "8",
    item: {
      imageUrl: "",
      name: "Novel - The Great Gatsby",
    },
    category: "Books",
    unit: "pcs",
    branch: "Ibadan",
    isLow: false,
    stock: 60,
    sellingPrice: 12000,
    costPrice: 8000,
    supplier: "Book World",
  },
  {
    id: "9",
    item: {
    //   imageUrl: "/images/shoes.jpg",
      name: "Running Shoes",
    },
    category: "Footwear",
    unit: "pair",
    branch: "Port Harcourt",
    isLow: false,
    stock: 90,
    sellingPrice: 25000,
    costPrice: 20000,
    supplier: "Shoe Store",
  },
  {
    id: "10",
    item: {
    //   imageUrl: "/images/headphones.jpg",
      name: "Wireless Headphones",
    },
    category: "Electronics",
    unit: "pcs",
    branch: "Lagos",
    isLow: true,
    stock: 3,
    sellingPrice: 80000,
    costPrice: 70000,
    supplier: "Audio Tech",
  },
  {
    id: "11",
    item: {
    //   imageUrl: "/images/backpack.jpg",
      name: "Travel Backpack",
    },
    category: "Accessories",
    unit: "pcs",
    branch: "Abuja",
    isLow: false,
    stock: 40,
    sellingPrice: 18000,
    costPrice: 15000,
    supplier: "Bag Haven",
  },
  {
    id: "12",
    item: {
    //   imageUrl: "/images/television.jpg",
      name: "LED TV",
    },
    category: "Electronics",
    unit: "pcs",
    branch: "Lagos",
    isLow: false,
    stock: 25,
    sellingPrice: 350000,
    costPrice: 300000,
    supplier: "Visual Tech",
  },
  {
    id: "13",
    item: {
    //   imageUrl: "/images/table.jpg",
      name: "Dining Table",
    },
    category: "Furniture",
    unit: "set",
    branch: "Kano",
    isLow: false,
    stock: 10,
    sellingPrice: 150000,
    costPrice: 130000,
    supplier: "FurniLux",
  },
  {
    id: "14",
    item: {
    //   imageUrl: "/images/dumbbells.jpg",
      name: "Dumbbells",
    },
    category: "Fitness",
    unit: "pair",
    branch: "Abuja",
    isLow: false,
    stock: 35,
    sellingPrice: 50000,
    costPrice: 40000,
    supplier: "Gym Pro",
  },
  {
    id: "15",
    item: {
    //   imageUrl: "/images/keyboard.jpg",
      name: "Mechanical Keyboard",
    },
    category: "Computing",
    unit: "pcs",
    branch: "Lagos",
    isLow: true,
    stock: 6,
    sellingPrice: 55000,
    costPrice: 48000,
    supplier: "Tech Store",
  },
  {
    id: "16",
    item: {
    //   imageUrl: "/images/coffee-maker.jpg",
      name: "Coffee Maker",
    },
    category: "Kitchen Appliances",
    unit: "pcs",
    branch: "Ibadan",
    isLow: false,
    stock: 18,
    sellingPrice: 65000,
    costPrice: 55000,
    supplier: "Kitchen Pro",
  },
  {
    id: "17",
    item: {
    //   imageUrl: "/images/guitar.jpg",
      name: "Acoustic Guitar",
    },
    category: "Musical Instruments",
    unit: "pcs",
    branch: "Port Harcourt",
    isLow: false,
    stock: 12,
    sellingPrice: 90000,
    costPrice: 75000,
    supplier: "Music Haven",
  },
  {
    id: "18",
    item: {
    //   imageUrl: "/images/fan.jpg",
      name: "Standing Fan",
    },
    category: "Home Appliances",
    unit: "pcs",
    branch: "Lagos",
    isLow: false,
    stock: 45,
    sellingPrice: 25000,
    costPrice: 20000,
    supplier: "Cool Breeze Ltd",
  },
  {
    id: "19",
    item: {
    //   imageUrl: "/images/handbag.jpg",
      name: "Leather Handbag",
    },
    category: "Accessories",
    unit: "pcs",
    branch: "Abuja",
    isLow: false,
    stock: 30,
    sellingPrice: 70000,
    costPrice: 60000,
    supplier: "Bag Haven",
  },
  {
    id: "20",
    item: {
    //   imageUrl: "/images/blender.jpg",
      name: "Blender",
    },
    category: "Kitchen Appliances",
    unit: "pcs",
    branch: "Ibadan",
    isLow: true,
    stock: 4,
    sellingPrice: 55000,
    costPrice: 45000,
    supplier: "Kitchen Pro",
  },
];

const ItemsHomepage = () => {
  return (
    <section className="">
      <ItemsHeader />
      <ItemsDataTable columns={ItemsColumns} data={itemsData} />
    </section>
  );
};

export default ItemsHomepage;
