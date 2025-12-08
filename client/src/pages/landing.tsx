import { StickyHeader } from "@/components/sticky-header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { GuaranteeSection } from "@/components/guarantee-section";
import { BrandsSection } from "@/components/brands-section";
import { CoverageSection } from "@/components/coverage-section";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <GuaranteeSection />
        <BrandsSection />
        <CoverageSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
