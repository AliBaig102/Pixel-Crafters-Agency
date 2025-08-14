"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Code, Palette, Zap } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container mx-auto relative min-h-screen transition-colors duration-300 mb-52 sm:mb-40 lg:mb-0">
      {/* Main Hero Content */}
      <div className="px-4 py-12 sm:py-16 lg:py-24 xl:py-36">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Mobile: Image First, Desktop: Content First */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
              WE CREATE <br className="hidden sm:block" />
              <span className="bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 inline-block rounded-xl sm:rounded-2xl text-2xl sm:text-3xl lg:text-4xl xl:text-7xl">
                DIGITAL
              </span>{" "}
              <br className="sm:hidden" />
              EXPERIENCES THAT INSPIRE
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
              We&apos;re a creative digital agency specializing in web design,
              development, and branding. Our team crafts stunning websites and
              digital solutions that drive results and elevate your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Mobile: Image First, Desktop: Image Second */}
          <div className="order-1 lg:order-2 relative mt-16 lg:mt-0">
            <div className="aspect-square">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Section */}
      <div className="bg-primary p-6 sm:p-8 py-8 sm:py-12 flex flex-col gap-6 rounded-2xl sm:rounded-3xl relative shadow-2xl mt-12 lg:mt-16">
        {/* Shape */}
        <div className="bg-primary size-16 sm:size-20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 sm:-translate-y-10 rotate-45 rounded-tl-2xl"></div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-between">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12">
            <div className="flex items-center gap-2">
              <Image
                src="/images/burst-pucker.png"
                alt="trusted badge"
                width={24}
                height={24}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <span className="text-base sm:text-lg font-medium text-white">
                Trusted by Industry Leaders
              </span>
            </div>
            <Image
              src="/images/arrow-right.png"
              alt="arrow"
              width={24}
              height={24}
              className="w-8 sm:w-12 hidden sm:block"
            />
          </div>

          <div className="text-white flex items-center gap-2 sm:gap-4 text-lg sm:text-2xl lg:text-3xl flex-wrap justify-center">
            <div className="font-bold">SHOPIFY</div>
            <div className="font-bold">STRIPE</div>
            <div className="font-bold">VERCEL</div>
            <div className="font-bold hidden sm:block">FIGMA</div>
            <div className="font-bold hidden lg:block">WEBFLOW</div>
            <div className="font-bold hidden lg:block">NOTION</div>
          </div>
        </div>

        <div className="h-0.5 bg-white/30 hidden sm:block"></div>

        <div className="grid grid-cols-2 lg:grid-cols-4 -bottom-24 sm:-bottom-10 gap-4 absolute left-1/2 -translate-x-1/2 px-4 lg:bottom-0 translate-y-1/2 w-[90%] sm:w-[85%] lg:w-[90%]">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center shadow-xl">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              8+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
              Years Experience
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center shadow-xl">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              150+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
              Projects Completed
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center shadow-xl">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              98%
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
              Client Satisfaction
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center shadow-xl">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
              Support Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
