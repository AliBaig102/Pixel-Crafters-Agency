"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Service {
  id: number;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...",
  },
  {
    id: 2,
    title: "Motion Graphics",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...",
  },
  {
    id: 3,
    title: "Motion Graphics",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...",
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...",
  },
  {
    id: 5,
    title: "Brand Identity",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...",
  },
];

export function ServicesSlider() {
  const swiperRef = useRef<SwiperType>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="container border mx-auto p-10  my-20 rounded-3xl">
      <div className="px-4">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">
            Our Services
          </h2>
        </div>

        {/* Services Slider */}
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={0}
            slidesPerView={3}
            modules={[Navigation, Pagination]}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="services-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="group my-6 mx-3 relative rounded-3xl p-8 h-full transition-all duration-300 bg-white border-2 border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 cursor-pointer">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <Button
                      size="sm"
                      className="rounded-full p-0! size-10 bg-purple-600 hover:bg-purple-700 text-white group-hover:bg-white/20 group-hover:hover:bg-white/30 group-hover:border-white/30 transition-all duration-300"
                    >
                      <ArrowUpRight className="size-8" />
                    </Button>
                  </div>

                  {/* Divider */}
                  <div className="h-px mb-6 bg-gray-200 group-hover:bg-white/30 transition-colors duration-300"></div>

                  {/* Description */}
                  <p className="text-sm lg:text-base mb-8 leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Placeholder Image */}
                  <div className="aspect-video rounded-2xl flex items-center justify-center bg-gray-100 group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center bg-gray-200 group-hover:bg-white/20 transition-all duration-300">
                        <svg
                          className="w-8 h-8 text-gray-400 group-hover:text-white/70 transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-300">
                        Service Image
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrev}
                className="rounded-full p-0! size-10 border-2 border-gray-300 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300"
              >
                <ArrowLeft className="size-5 text-gray-600" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleNext}
                className="rounded-full p-0! size-10 border-2 border-gray-300 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300"
              >
                <ArrowRight className="size-5 text-gray-600" />
              </Button>
            </div>

            {/* Custom Pagination */}
            <div className="custom-pagination flex items-center gap-2 w-fit!"></div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="my-20 text-center">
          <p className="text-xl lg:text-3xl leading-relaxed max-w-4xl mx-auto">
            <span className="text-purple-600 font-semibold">
              Ipsum dolor sit
            </span>{" "}
            amet,{" "}
            <span className="text-purple-600 font-semibold">
              consectetur adipiscing
            </span>{" "}
            elit, sed do eiusmod tempor ut labore et{" "}
            <span className="text-gray-400">dolore magna</span> aliqua.{" "}
            <span className="text-purple-600 font-semibold">Lore...</span>
          </p>
        </div>
      </div>
    </section>
  );
}
