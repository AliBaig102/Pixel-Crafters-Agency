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
    title: "Web development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    category: "Digital marketing",
  },
  {
    id: 2,
    title: "Web development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    category: "Digital marketing",
  },
  {
    id: 3,
    title: "Web development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    category: "Digital marketing",
  },
  {
    id: 4,
    title: "Web development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    category: "Digital marketing",
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="odd:translate-y-10 even:translate-y-20  transition-all duration-300"
          >
            {/* Project Image Placeholder */}
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 aspect-square relative rounded-3xl">
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* See More Button - positioned at bottom right */}
              <div className="absolute bottom-4 right-4">
                <Button
                  size="sm"
                  className="bg-primary text-white hover:from-purple-700 rounded-full px-4 py-2 text-xs font-medium flex items-center gap-1 shadow-lg"
                >
                  See more
                  <ArrowUpRight className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
