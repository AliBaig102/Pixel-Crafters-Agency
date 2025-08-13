import React from "react";

interface Testimonial {
  id: number;
  name: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Lorem",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "ML"
  },
  {
    id: 2,
    name: "Maria Lorem",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "ML"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Purple Gradient Background Container */}
        <div className="bg-primary rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="flex items-start gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">{testimonial.avatar}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-px bg-white/30 transform -translate-x-1/2"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full transform -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
}