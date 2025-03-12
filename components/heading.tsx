import { cn } from "@/lib/utils";
import React from "react";
interface HeadingProps {
  title: string;
  className?: string;
}

export const Heading = ({ title, className }: HeadingProps) => {
  return (
    <h1 className={cn(className, "md:text-5xl font-extrabold mb-1.5 text-3xl")}>
      {title}
    </h1>
  );
};
