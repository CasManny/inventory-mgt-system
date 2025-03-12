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
    <section className="py-10" id="testimonials">
      <div className="">
        <div className="">
          <Heading
            title="What Our Customers Say"
            className="text-center mb-10"
          />
          <p className="text-center">
            Trusted by thousands of businesses worldwide.
          </p>
        </div>
        <div className="mt-12">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-1">
              {customerReviews.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col justify-center p-3">
                        <p>{item.review}</p>
                        <div className="flex mt-5 items-center space-x-2.5">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div className="">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-muted-foreground text-sm">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
