"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code,
  Palette,
  Star,
  TrendingUp,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
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
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building modern, responsive websites and web apps with cutting-edge tech. Creating performant solutions that drive business growth.",
    icon: "code",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Creating beautiful, user-centered designs that combine aesthetics with intuitive functionality for exceptional digital experiences.",
    icon: "palette",
  },
  {
    id: 3,
    title: "Brand Identity",
    description:
      "Crafting memorable brand identities with logos, guidelines and visual systems that make your business stand out from competitors.",
    icon: "star",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Driving growth through strategic marketing campaigns. SEO, content, social media and paid ads to boost your online visibility.",
    icon: "trending-up",
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    description:
      "Building conversion-focused online stores with seamless UX and robust backend systems to power your digital retail success.",
    icon: "shopping-cart",
  },
  {
    id: 6,
    title: "Mobile App Development",
    description:
      "Developing engaging native and cross-platform mobile apps. From concept to launch, we create flawless mobile experiences.",
    icon: "smartphone",
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
    <section className="container border mx-auto p-4 sm:p-6 lg:p-10 my-12 sm:my-16 lg:my-20 rounded-2xl sm:rounded-3xl dark:border-gray-800">
      <div className="px-4">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl">
            We offer comprehensive digital solutions to help your business
            thrive in the digital landscape.
          </p>
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
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 1.5,
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
            className="services-swiper gap-4"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="group my-3 sm:my-6 relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 h-full transition-all duration-300 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary shadow-lg hover:shadow-xl hover:bg-primary dark:hover:bg-primary cursor-pointer">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <Button
                      size="sm"
                      className="rounded-full p-0 size-8 sm:size-10 bg-primary text-white group-hover:bg-white group-hover:text-primary transition-all duration-300"
                    >
                      <ArrowUpRight className="size-4 sm:size-5" />
                    </Button>
                  </div>

                  {/* Divider */}
                  <div className="h-px mb-4 sm:mb-6 bg-gray-200 dark:bg-gray-700 group-hover:bg-white/30 transition-colors duration-300"></div>

                  {/* Description */}
                  <p className="text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed text-gray-600 dark:text-gray-300 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Service Icon */}
                  <div className="aspect-video rounded-xl sm:rounded-2xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl flex items-center justify-center bg-primary/10 group-hover:bg-white/20 transition-all duration-300">
                        {service.icon === "code" && (
                          <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-white/70 transition-colors duration-300" />
                        )}
                        {service.icon === "palette" && (
                          <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-white/70 transition-colors duration-300" />
                        )}
                        {service.icon === "star" && (
                          <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-white/70 transition-colors duration-300" />
                        )}
                        {service.icon === "trending-up" && (
                          <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-white/70 transition-colors duration-300" />
                        )}
                        {service.icon === "shopping-cart" && (
                          <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-white/70 transition-colors duration-300" />
                        )}
                        {service.icon === "smartphone" && (
                          <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-white/70 transition-colors duration-300" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-white/70 transition-colors duration-300">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 sm:mt-8">
            {/* Navigation Arrows */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrev}
                className="rounded-full p-0 size-8 sm:size-10 border-2 border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300"
              >
                <ArrowLeft className="size-4 sm:size-5 text-gray-600 dark:text-gray-300" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleNext}
                className="rounded-full p-0 size-8 sm:size-10 border-2 border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300"
              >
                <ArrowRight className="size-4 sm:size-5 text-gray-600 dark:text-gray-300" />
              </Button>
            </div>

            {/* Custom Pagination */}
            <div className="custom-pagination flex items-center gap-1 sm:gap-2"></div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="my-12 sm:my-16 lg:my-20 text-center">
          <p className="text-lg sm:text-xl lg:text-3xl leading-relaxed max-w-4xl mx-auto dark:text-gray-200">
            <span className="text-primary font-semibold">
              Ready to transform
            </span>{" "}
            your digital presence?{" "}
            <span className="text-primary font-semibold">
              Let&apos;s create something
            </span>{" "}
            amazing together. From concept to{" "}
            <span className="text-gray-400 dark:text-gray-500">launch</span>,{" "}
            we&apos;re here to help.{" "}
            <span className="text-primary font-semibold">
              Get started today.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
