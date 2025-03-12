import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heading } from "./heading";
import { Card, CardContent } from "./ui/card";
import { customerReviews } from "@/data/constants";

export const Reviews = () => {
  return (
    <section
      className="py-10 relative w-full overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <Heading title="What Our Customers Say" className="mb-6" />
          <p className="text-gray-600">
            Trusted by thousands of businesses worldwide.
          </p>
        </div>

        <div className="mt-10 w-full">
          <Carousel className="w-full relative">
            <CarouselContent className="-ml-1 flex">
              {customerReviews.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 xs:basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-4">
                    <Card>
                      <CardContent className="flex flex-col justify-center p-5">
                        <p className="text-gray-700">{item.review}</p>
                        <div className="flex mt-5 items-center space-x-3">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-lg">{item.name}</p>
                            <p className="text-gray-500 text-sm">{item.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
