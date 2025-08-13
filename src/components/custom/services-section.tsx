import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="grid grid-cols-2 gap-8 container mx-auto my-20">
      {/* Left Side Image */}
      <div className="relative">
        <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
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
      <div className="grid grid-cols-2 gap-2">
        <div className="border border-primary p-4 rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Button
              size="sm"
              variant={"outline"}
              className="rounded-full p-0! size-10 border-primary"
            >
              <ArrowUpRight className="size-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
