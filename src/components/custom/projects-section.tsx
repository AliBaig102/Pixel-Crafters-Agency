import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with advanced filtering, secure payments, and mobile-first design that increased client sales by 150%.",
    category: "Web Development",
  },
  {
    id: 2,
    title: "FinTech Mobile App",
    description:
      "Cross-platform mobile application for digital banking with biometric authentication and real-time transaction tracking.",
    category: "Mobile App",
  },
  {
    id: 3,
    title: "Brand Identity Redesign",
    description:
      "Complete brand transformation including logo design, color palette, typography, and marketing materials for a tech startup.",
    category: "Branding",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description:
      "Intuitive analytics dashboard with data visualization, user management, and API integrations for a growing SaaS company.",
    category: "UI/UX Design",
  },
];

export function ProjectsSection() {
  return (
    <section className="container mx-auto my-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Our Projects</h2>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`transition-all duration-300 hover:scale-105 ${
              index % 2 === 0 ? 'md:translate-y-8' : 'md:translate-y-16'
            }`}
          >
            {/* Project Image Placeholder */}
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 aspect-[4/3] sm:aspect-square relative rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Category Badge */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4">
                <span className="bg-primary text-white text-xs md:text-sm font-medium px-2 py-1 md:px-3 md:py-1 rounded-full shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* See More Button - positioned at bottom right */}
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
                <Button
                  size="sm"
                  className="bg-primary text-white hover:bg-primary/90 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs font-medium flex items-center gap-1 shadow-lg transition-all duration-300"
                >
                  <span className="hidden sm:inline">See more</span>
                  <span className="sm:hidden">View</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
