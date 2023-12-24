"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { api } from "@/lib/axios_interceptor";
type Props = {
  categories: Promise<any>;
};

const HomeCarouselSlider = async ({ categories }: Props) => {
  const router = useRouter();
  const categoryList = await categories;
  return (
    <Swiper
      className="w-full aspect-video max-h-36 sm:max-h-48 md:max-h-60 lg:max-h-72 xl:max-h-80 2xl:max-h-96"
      navigation
      autoplay
      modules={[Navigation, Autoplay]}
      onClick={(s) => router.push(`/category/${s.activeIndex}`)}
    >
      {categoryList.map((category: any) => (
        <SwiperSlide key={category.id}>
          <Image
            src={category.image}
            alt="offer"
            fill
            sizes="(min-width: 1280px) calc(100vw - 224px), (min-width: 440px) 97.56vw, (min-width: 400px) 400px, calc(75vw + 75px)"
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCarouselSlider;
