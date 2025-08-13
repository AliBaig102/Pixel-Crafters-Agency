import { Header } from "@/components/custom/header";
import { HeroSection } from "@/components/custom/hero-section";
import { ServicesSection } from "@/components/custom/services-section";
import { ServicesSlider } from "@/components/custom/services-slider";
import { ProjectsSection } from "@/components/custom/projects-section";
import { TestimonialsSection } from "@/components/custom/testimonials-section";
import { Footer } from "@/components/custom/footer";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <ServicesSlider />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </div>
  );
}
