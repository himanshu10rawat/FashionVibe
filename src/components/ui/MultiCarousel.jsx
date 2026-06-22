import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

export default function MultiCarousel() {
  const categories = [
    {
      src: "/modal-images/women1.jpg",
      alt: "Fashion women first",
      text: "western wear",
      url: "western-wear",
    },
    {
      src: "/modal-images/men1.jpg",
      alt: "Fashion men first",
      text: "sleepwear",
      url: "sleepwear",
    },
    {
      src: "/modal-images/women2.jpg",
      alt: "Fashion women two",
      text: "workwear",
      url: "workwear",
    },
    {
      src: "/modal-images/men2.jpg",
      alt: "Fashion men two",
      text: "eyewear",
      url: "eyewear",
    },
    {
      src: "/modal-images/women3.jpg",
      alt: "Fashion women three",
      text: "casualwear",
      url: "casualwear",
    },
    {
      src: "/modal-images/men3.jpg",
      alt: "Fashion men three",
      text: "office wear",
      url: "office-wear",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {categories.map(({ src, alt, text, url }, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <Link href={`/${url}`} className="block">
              <div className="relative h-60 md:h-150 mb-3">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes={"100%"}
                  className="object-cover object-top"
                />
              </div>
              <h3 className="font-bold text-lg md:text-2xl uppercase">
                {text}
              </h3>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 h-10 w-10 md:inline-flex" />
      <CarouselNext className="right-4 h-10 w-10 md:inline-flex" />
    </Carousel>
  );
}
