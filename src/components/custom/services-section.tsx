import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight, Code, Palette, Star, TrendingUp } from "lucide-react";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies for optimal performance.",
    icon: "code"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "User-centered design that combines beautiful aesthetics with intuitive functionality and seamless experiences.",
    icon: "palette",
    highlighted: true,
  },
  {
    id: 3,
    title: "Brand Identity",
    description:
      "Complete brand identity solutions that make your business memorable and distinctive in the market.",
    icon: "star"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns that drive growth and boost your online presence effectively.",
    icon: "trending-up"
  },
];

export function ServicesSection() {
  return (
    <section className="container mx-auto p-4 sm:p-6 lg:p-10 my-12 sm:my-16 lg:my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">

        {/* Left Side - Image */}
        <div className="order-1 lg:order-1">
          <div className="aspect-square">
            <Image
              src="/images/services-image.png"
              alt="services image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Services Grid */}
        <div className="order-2 lg:order-2">
          {/* Services Grid with Staggered Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 border cursor-pointer ${
                  index % 2 === 0 ? "translate-y-0 sm:translate-y-12" : "translate-y-0 sm:translate-y-24"
                } ${
                  service.highlighted
                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary hover:shadow-lg"
                }`}
              >
                <div className="mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 ${
                    service.highlighted
                      ? "bg-white/20"
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    {service.icon === 'code' && <Code className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      service.highlighted ? "text-white" : "text-primary"
                    }`} />}
                    {service.icon === 'palette' && <Palette className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      service.highlighted ? "text-white" : "text-primary"
                    }`} />}
                    {service.icon === 'star' && <Star className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      service.highlighted ? "text-white" : "text-primary"
                    }`} />}
                    {service.icon === 'trending-up' && <TrendingUp className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      service.highlighted ? "text-white" : "text-primary"
                    }`} />}
                  </div>
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-2 mt-8 transition-colors duration-300 ${
                      service.highlighted
                        ? "text-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                      service.highlighted
                        ? "text-white/90"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
                <Button
                  variant={service.highlighted ? "secondary" : "outline"}
                  size="sm"
                  className={`w-full transition-all duration-300 ${
                    service.highlighted
                      ? "bg-white text-primary hover:bg-white/90"
                      : "border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  See more
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
