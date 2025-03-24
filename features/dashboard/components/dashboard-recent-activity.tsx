"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow, parse } from "date-fns";
import { ArrowDown } from "lucide-react";

const recentActivities = [
  {
    id: 1,
    user: "John Doe",
    action: "added",
    item: "Laptops",
    quantity: 5,
    timestamp: "2025-03-24 10:15 AM",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "removed",
    item: "Keyboards",
    quantity: 2,
    timestamp: "2025-03-24 09:45 AM",
  },
  {
    id: 3,
    user: "Michael Lee",
    action: "updated",
    item: "Monitors",
    quantity: 10,
    timestamp: "2025-03-24 08:30 AM",
  },
  {
    id: 4,
    user: "Emily Johnson",
    action: "added",
    item: "Printers",
    quantity: 3,
    timestamp: "2025-03-23 04:20 PM",
  },
  {
    id: 5,
    user: "David Brown",
    action: "removed",
    item: "Mouse",
    quantity: 8,
    timestamp: "2025-03-23 01:10 PM",
  },
  {
    id: 6,
    user: "Sarah Wilson",
    action: "added",
    item: "USB Cables",
    quantity: 15,
    timestamp: "2025-03-22 11:45 AM",
  },
  {
    id: 7,
    user: "James Anderson",
    action: "updated",
    item: "External Hard Drives",
    quantity: 5,
    timestamp: "2025-03-22 10:00 AM",
  },
];

export const DashboardRecentActivity = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        setShowArrow(scrollTop + clientHeight < scrollHeight);
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }

    return () => currentRef?.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  return (
    <Card className="p-4 relative">
      <CardContent>
        <div className="bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
          <div
            ref={scrollRef}
            className="max-h-64 overflow-y-auto pr-2 no-scrollbar"
          >
            <ul className="space-y-3">
              {recentActivities.map((activity) => {
                const parsedDate = parse(
                  activity.timestamp,
                  "yyyy-MM-dd hh:mm a",
                  new Date()
                );
                const timeAgo = formatDistanceToNow(parsedDate, {
                  addSuffix: true,
                });

                return (
                  <li
                    key={activity.id}
                    className="p-3 border rounded-lg shadow-sm"
                  >
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">{activity.user}</span>{" "}
                      {activity.action}{" "}
                      <span className="font-semibold">
                        {activity.quantity} {activity.item}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">{timeAgo}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Animated Scroll Indicator */}
          {showArrow && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce bg-blue-200 rounded-sm">
              <ArrowDown className="size-5 text-white" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
