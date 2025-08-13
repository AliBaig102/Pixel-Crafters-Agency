"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container mx-auto relative min-h-screen transition-colors duration-300">
      {/* Main Hero Content */}
      <div className="px-4 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-3xl lg:text-4xl xl:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
              WE CREATE <br />
              <span className="bg-primary text-white px-4 py-2 inline-block rounded-2xl">
                WONDERS
              </span>{" "}
              WEBSITES THAT WORK
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam
              nonummy nibh euismod tincidunt ut. Lorem ipsum dolo...
            </p>

            <Button
              size="lg"
              className="bg-primary hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View more
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right Content - Placeholder Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium">Placeholder Image</p>
                <p className="text-xs">500 x 500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Purple Section */}
      <div className="bg-primary p-8 py-12 flex flex-col gap-6 rounded-3xl relative shadow-2xl">
        {/* Shape */}
        <div className="bg-primary size-20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 rotate-45 rounded-tl-2xl"></div>
        
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <Image
                src="/images/burst-pucker.png"
                alt="logo"
                width={24}
                height={24}
                className="w-8 h-8"
              />
              <span className="text-lg font-medium text-white">Trusted by</span>
            </div>
            <Image
              src="/images/arrow-right.png"
              alt="logo"
              width={24}
              height={24}
              className="w-12"
            />
          </div>
          
          <div className="text-white flex items-center gap-4 text-3xl">
            <div><h3>LOGO</h3></div>
            <div><h3>LOGO</h3></div>
            <div><h3>LOGO</h3></div>
            <div><h3>LOGO</h3></div>
            <div><h3>LOGO</h3></div>
            <div><h3>LOGO</h3></div>
          </div>
        </div>
        
        <div className="h-0.5 bg-white/30"></div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 absolute left-1/2 -translate-x-1/2 p-8 -bottom-0 translate-y-1/2 w-[80%]">
          <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-4 flex items-center gap-4 text-center shadow-xl">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">10</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">years of experience</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-4 flex items-center gap-4 text-center shadow-xl">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">200K</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">active users</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-4 flex items-center gap-4 text-center shadow-xl">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">1000</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">hours of digital</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-4 flex items-center gap-4 text-center shadow-xl">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">100</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Lorem ipsum</div>
          </div>
        </div>
      </div>
    </section>
  );
}
