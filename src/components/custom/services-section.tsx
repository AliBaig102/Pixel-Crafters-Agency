import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const services: Service[] = [
  {
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in...",
    isHighlighted: false,
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in...",
    isHighlighted: true,
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in...",
    isHighlighted: false,
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in...",
    isHighlighted: false,
  },
];

export function ServicesSection() {
  return (
    <section className="grid grid-cols-2 gap-8 container mx-auto my-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Left Side Image */}
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

      {/* Right Side Services */}
      <div className="grid grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl flex flex-col odd:translate-y-12 even:translate-y-24 border-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
              service.isHighlighted
                ? "bg-gradient-to-br from-purple-600 to-purple-700 border-purple-600 text-white"
                : "bg-white dark:bg-gray-800 border-purple-300 dark:border-purple-600 hover:border-purple-400 dark:hover:border-purple-500"
            }`}
          >
            {/* Header with Arrow Icon */}
            <div className="flex items-center justify-between mb-4">
              <Button
                size="sm"
                variant="outline"
                className={`rounded-full p-0 w-10 h-10 transition-all duration-300 ${
                  service.isHighlighted
                    ? "border-white/30 bg-white/10 hover:bg-white/20 text-white"
                    : "border-gray-300 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700"
                }`}
              >
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="grow">
              {/* Service Title */}
              <h3
                className={`text-lg font-semibold mb-3 ${
                  service.isHighlighted ? "text-white" : "text-gray-900 dark:text-white"
                }`}
              >
                {service.title}
              </h3>

              {/* Service Description */}
              <p
                className={`text-sm mb-6 leading-relaxed ${
                  service.isHighlighted ? "text-white/90" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {service.description}
              </p>
            </div>

            {/* See More Button */}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  service.isHighlighted
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800"
                }`}
              >
                See more
              </Button>
              <ArrowUpRight
                className={`w-4 h-4 ${
                  service.isHighlighted ? "text-white" : "text-gray-600 dark:text-gray-300"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
