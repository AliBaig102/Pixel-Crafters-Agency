import { Header } from "@/components/custom/header";
import { HeroSection } from "@/components/custom/hero-section";
import { ServicesSection } from "@/components/custom/services-section";
import { ServicesSlider } from "@/components/custom/services-slider";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSlider />
        <ServicesSection />
      </main>
    </div>
  );
}
